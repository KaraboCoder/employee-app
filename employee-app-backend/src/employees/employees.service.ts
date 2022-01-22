import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { generateId } from 'src/utils/id-generator';
import { EmployeeDto } from './dtos/employee.dto';
import { EmployeesRepository } from './employees.repository';
import { Employee } from './schemas/employee.schema';
// import escapeStringRegexp from 'escape-string-regexp';

@Injectable()
export class EmployeesService {

    constructor(private readonly employeesRepository: EmployeesRepository) { }

    async create(employeeDto: EmployeeDto): Promise<Employee> {
        employeeDto._id = generateId()
        return this.employeesRepository.create(employeeDto)
    }

    async findAll(): Promise<Employee[]> {
        return this.employeesRepository.findAll()
    }

    async findById(id: string): Promise<Employee> {
        return this.employeesRepository.findOne({ _id: id })
    }

    async search(query: string, year: string, skills: string): Promise<Employee[]> {
        let searchQuery = {}

        /*
         * Building a query for searching the DB
         */
        if (query) {
            searchQuery["$or"] =
                [
                    { firstName: { $regex: query, $options: 'i' } },
                    { lastName: { $regex: query, $options: 'i' } },
                    { email: { $regex: '^' + query + '$', $options: 'i' } }
                ]
        }

        if (year) {
            searchQuery["$and"] = [{ dateOfBirth: { $regex: year } }]
        }

        if (skills) {
            const skills_regx = skills.split(',').map((skill) => (new RegExp('^' + skill + '$', 'i')))
            if (typeof searchQuery["$and"] === 'object') {

                searchQuery["$and"].push({ 'skills.title': { $all: skills_regx } })
            }
            else {
                searchQuery["$and"] = [{ 'skills.title': { $all: skills_regx } }]
            }
        }

        return this.employeesRepository.find(searchQuery)
    }

    async update(id: string, updateEmployeeDto: EmployeeDto): Promise<Employee> {
        return this.employeesRepository.findOnAndUpdate({ _id: id }, updateEmployeeDto)
    }

    async delete(id: string): Promise<Employee> {
        return this.employeesRepository.deleteOne(id)
    }

}
