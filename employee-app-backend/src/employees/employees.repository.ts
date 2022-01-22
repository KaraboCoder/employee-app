
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, model, Model } from "mongoose";

import { Employee, EmployeeDocument } from "./schemas/employee.schema";

@Injectable()
export class EmployeesRepository {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) { }

    async create(employee: Employee): Promise<Employee> {
        const newEmployee = new this.employeeModel(employee)
        return newEmployee.save()
    }

    async findAll(): Promise<Employee[]> {
        return this.employeeModel.find({})
    }

    async findOne(employeeFilter: FilterQuery<Employee>): Promise<Employee> {
        return this.employeeModel.findOne(employeeFilter)
    }

    async find(employeeFilter: FilterQuery<Employee>): Promise<Employee[]> {
        return this.employeeModel.find(employeeFilter)
    }

    async findOnAndUpdate(employeeFilter: FilterQuery<Employee>, employee: Partial<Employee>): Promise<Employee> {
        return this.employeeModel.findByIdAndUpdate(employeeFilter, employee, { new: true })
    }

    async deleteOne(id: string): Promise<Employee> {
        return this.employeeModel.findByIdAndDelete(id)
    }

}