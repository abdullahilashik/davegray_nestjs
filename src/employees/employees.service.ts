import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class EmployeesService {

  constructor(private readonly databaseService: DatabaseService){

  }

  /**
   * Create new employee
   * @param createEmployeeDto 
   * @returns 
   */
  create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    const item = this.databaseService.employee.create({
      data: createEmployeeDto
    });
    return item;
  }
  /**
   * Find all employee or filter by role
   * @param role 
   * @returns 
   */

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    
    const employees = this.databaseService.employee.findMany({
      where: {
        role: role
      }
    })
    return employees;    
  }

  /**
   * Find single employee by id
   * @param id 
   * @returns 
   */
  findOne(id: number) {
    const employee = this.databaseService.employee.findFirst({
      where: {
        id
      }
    });
    return employee;    
  }

  /**
   * Update employee
   * @param id 
   * @param updateEmployeeDto 
   * @returns 
   */

  update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    const updated = this.databaseService.employee.update({
      where: {
        id: id
      },
      data: updateEmployeeDto
    });
    return updated;    
  }

  remove(id: number) {
    const deleted = this.databaseService.employee.delete({
      where: {
        id
      }
    });
    return deleted;
  }
}
