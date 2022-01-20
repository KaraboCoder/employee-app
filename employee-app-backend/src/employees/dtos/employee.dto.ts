import { AddressDto } from "./address.dto";
import { SkillDto } from "./skill.dto";

export class EmployeeDto {
    id: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    dateOfBirth: string;
    address: AddressDto;
    skills: SkillDto[]
}