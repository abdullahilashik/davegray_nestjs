import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class EmployeesService {

  constructor(private readonly databaseService: DatabaseService){

  }

  create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    const item = this.databaseService.employee.create({
      data: createEmployeeDto
    });
    return item;
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
