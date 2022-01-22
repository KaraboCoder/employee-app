import { Address } from "../types/Address";
import { Skill } from "../types/Skill";
export class EmployeeDto {
    _id: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    dateOfBirth: string;
    address: Address;
    skills: Skill[];
}