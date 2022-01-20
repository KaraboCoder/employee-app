import { Body, Controller, Get, Param, Post, Query, Patch, Delete, Put } from '@nestjs/common';
import { EmployeeDto } from './dtos/employee.dto';
import { EmployeesService } from './employees.service';
import { ToLowerCasePipe } from './pipes/to-lowercase.pipe';

@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @Get()
    findAllEmployees(): EmployeeDto[] {
        return this.employeesService.findAll()
    }

    @Get('/search')
    searchEmployees(@Query('query', ToLowerCasePipe) query: string): EmployeeDto[] {
        return this.employeesService.search(query)
    }

    @Post()
    createEmployee(@Body() createEployeeDto: EmployeeDto) {
        return this.employeesService.create(createEployeeDto)
    }

    @Put(':id')
    updateEmployee(@Param('id') id: string, @Body() updateEmployeeDto: EmployeeDto) {
        return this.employeesService.update(id, updateEmployeeDto)
    }

    @Delete(':id')
    deleteEmployee(@Param('id') id: string) {
        return this.employeesService.delete(id)
    }
}
