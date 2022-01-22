import { Body, Controller, Get, Param, Post, Query, Patch, Delete, Put } from '@nestjs/common';
import { EmployeeDto } from './dtos/employee.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @Get()
    async findAllEmployees(): Promise<EmployeeDto[]> {
        return this.employeesService.findAll()
    }

    @Get('/search')
    async searchEmployees(@Query('query') query: string, @Query('year') year: string, @Query('skills') skills: string): Promise<EmployeeDto[]> {
        return this.employeesService.search(query, year, skills)
    }

    @Post()
    async createEmployee(@Body() createEmployeeDto: EmployeeDto): Promise<EmployeeDto> {
        return this.employeesService.create(createEmployeeDto)
    }

    @Put(':id')
    async updateEmployee(@Param('id') id: string, @Body() updateEmployeeDto: EmployeeDto): Promise<EmployeeDto> {
        return this.employeesService.update(id, updateEmployeeDto)
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') id: string): Promise<EmployeeDto> {
        return this.employeesService.delete(id)
    }
}
