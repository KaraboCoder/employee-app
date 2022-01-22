import { Address } from "../types/address";
import { Skill } from "../types/skill";
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