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
        console.log(employeeDto)
        return this.employeesRepository.create(employeeDto)
    }

    async findAll(): Promise<Employee[]> {
        return this.employeesRepository.findAll()
    }

    async findById(id: string): Promise<Employee> {
        return this.employeesRepository.findOne({ _id: id })
    }

    async search(query: string): Promise<Employee[]> {
        const sanitizedQuery = query

        return this.employeesRepository.find({
            $or: [
                { firstName: { $regex: sanitizedQuery, $options: 'i' } },
                { lastName: { $regex: sanitizedQuery, $options: 'i' } },
                { email: { $regex: sanitizedQuery, $options: 'i' } }
            ]
        })
    }

    async update(id: string, updateEmployeeDto: EmployeeDto): Promise<Employee> {
        return this.employeesRepository.findOnAndUpdate({ _id: id }, updateEmployeeDto)
    }

    async delete(id: string): Promise<Employee> {
        return this.employeesRepository.deleteOne(id)
    }

}
