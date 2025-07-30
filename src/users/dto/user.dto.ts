import { PartialType } from '@nestjs/mapped-types'


import {
    IsEmail, IsUrl, IsNotEmpty, IsString, IsNumber, IsPhoneNumber,
    Length, Matches, ValidateNested, IsLatitude, IsLongitude
} from 'class-validator';
import { Type } from 'class-transformer';

class GeoDTO {
    @IsNotEmpty({ message: 'Latitude is required' })
    @IsLatitude({ message: 'Latitude must be a valid latitude coordinate' })
    lat: string;

    @IsNotEmpty({ message: 'Longitude is required' })
    @IsLongitude({ message: 'Longitude must be a valid longitude coordinate' })
    lng: string;
}

export class AddressDTO {
    @IsNotEmpty({ message: 'Street address is required' })
    @Length(3, 100, { message: 'Street must be between 3 and 100 characters' })
    street: string;

    @IsNotEmpty({ message: 'Suite/Apt is required' })
    @Length(1, 20, { message: 'Suite must be between 1 and 20 characters' })
    suite: string;

    @IsNotEmpty({ message: 'City is required' })
    @Length(2, 50, { message: 'City must be between 2 and 50 characters' })
    @Matches(/^[a-zA-Z\s\-']+$/, { message: 'City can only contain letters, spaces, hyphens, and apostrophes' })
    city: string;

    @IsNotEmpty({ message: 'Zipcode is required' })
    @Length(5, 10, { message: 'Zipcode must be between 5 and 10 characters' })
    zipcode: string;

    @ValidateNested()
    @Type(() => GeoDTO)
    geo: GeoDTO;
}

export class CompanyDTO {
    @IsNotEmpty({ message: 'Company name is required' })
    @Length(2, 100, { message: 'Company name must be between 2 and 100 characters' })
    name: string;

    @IsNotEmpty({ message: 'Catch phrase is required' })
    @Length(10, 200, { message: 'Catch phrase must be between 10 and 200 characters' })
    catchPhrase: string;

    @IsNotEmpty({ message: 'BS is required' })
    @Length(10, 200, { message: 'BS must be between 10 and 200 characters' })
    bs: string;
}

export default class UserDTO {
    @IsNumber({}, { message: 'ID must be a number' })
    id: number;

    @IsNotEmpty({ message: 'Name is required' })
    @Length(2, 100, { message: 'Name must be between 2 and 100 characters' })
    @Matches(/^[a-zA-Z\s\-']+$/, { message: 'Name can only contain letters, spaces, hyphens, and apostrophes' })
    name: string;

    @IsNotEmpty({ message: 'Username is required' })
    @Length(4, 20, { message: 'Username must be between 4 and 20 characters' })
    @Matches(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers, and underscores' })
    username: string;

    @IsEmail({}, { message: 'Email must be a valid email address' })
    email: string;

    @ValidateNested()
    @Type(() => AddressDTO)
    address: AddressDTO;

    @IsNotEmpty({ message: 'Phone number is required' })
    @IsPhoneNumber('US', { message: 'Phone number must be a valid US phone number' })
    phone: string;

    @IsUrl({}, { message: 'Website must be a valid URL' })
    website: string;

    @ValidateNested()
    @Type(() => CompanyDTO)
    company: CompanyDTO;
}

export class CreateUserDTO extends PartialType(UserDTO) { }
export class UpdateUserDTO extends PartialType(UserDTO) { }