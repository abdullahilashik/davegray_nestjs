import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';

@Injectable()
export class EmployeesService {
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return 'This action adds a new employee';
  }

  async findAll(role? : 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return `This action returns all employees`;
  }  

  async findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return `This action updates a #${id} employee`;
  }

  async remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
