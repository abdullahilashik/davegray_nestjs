import {PartialType} from '@nestjs/mapped-types'
export default class UserDTO {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export class CreateUserDTO extends PartialType(UserDTO) {}
export class UpdateUserDTO extends PartialType(UserDTO) {}