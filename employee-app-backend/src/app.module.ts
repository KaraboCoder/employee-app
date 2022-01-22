import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://kratos:kratos@kratos.qfs5j.mongodb.net/employees?retryWrites=true&w=majority'), EmployeesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
