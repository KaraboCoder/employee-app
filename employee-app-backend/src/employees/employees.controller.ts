import { Controller, Get } from '@nestjs/common';

@Controller('employees')
export class EmployeesController {
    @Get()
    findEmployees() {
        return "Hello"
    }
}
