import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { generateId } from 'src/utils/id-generator';
import { EmployeeDto } from './dtos/employee.dto';
import { Employee } from './types/Employee';

@Injectable()
export class EmployeesService {
    private employees: Employee[] = [];

    create(employeeDto: EmployeeDto) {
        employeeDto.id = generateId()
        console.log(employeeDto)
        this.employees.push(employeeDto)
    }

    findAll() {
        return this.employees
    }

    findById(id: string) {
        return this.employees.filter((employee) => employee.id === id)
    }

    search(query: string) {
        console.log(query)
        return this.employees.filter(
            (employee) => employee.firstName.toLowerCase().includes(query) || employee.lastName.toLowerCase().includes(query) || employee.email.toLowerCase().includes(query))
    }

    update(id: string, updateEmployeeDto: EmployeeDto) {
        if (this.findById(id).length === 1) {
            this.employees = this.employees.map((emp) => {
                if (emp.id === id) {
                    return { ...emp, ...updateEmployeeDto }
                } else {
                    return emp
                }
            })
        } else {
            throw new HttpException("Bad request", HttpStatus.BAD_REQUEST)
        }
    }

    delete(id: string) {
        if (this.findById(id).length === 1) {
            this.employees = this.employees.filter((employee) => employee.id !== id)
        } else {
            throw new HttpException("Bad request", HttpStatus.BAD_REQUEST)
        }
    }

}
