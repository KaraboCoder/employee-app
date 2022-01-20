import { Address } from "./Address";
import { Skill } from "./Skill";

export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    dateOfBirth: string;
    address: Address;
    skills: Skill[];
}