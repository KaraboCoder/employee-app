import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Address } from "../types/Address";
import { Skill } from "../types/Skill";

export type EmployeeDocument = Employee & Document;

@Schema({ _id: false })
export class Employee {
    @Prop()
    _id: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    contactNumber: string;

    @Prop()
    email: string;

    @Prop()
    dateOfBirth: string;

    @Prop()
    address: Address;

    @Prop([Skill])
    skills: Skill[];
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);