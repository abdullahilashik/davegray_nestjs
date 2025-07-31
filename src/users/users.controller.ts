import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { IUser, UsersService } from './users.service';
import UserDTO from './dto/user.dto';
import { SkipThrottle } from '@nestjs/throttler';
import { skip } from 'node:test';

export type TQuery = {
  role?: 'ADMIN' | 'TEACHER' | 'STUDENT';
};

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  find_user(@Query('username') username?: string): IUser | IUser[] {
    return this.usersService.find_user(username);
  }

    // users/intern
    @Get('intern')
    find_interns(){
        return 'interns';
    }
    // users/1
    @SkipThrottle()
    @Get(':id')
    find_users(@Param('id', ParseIntPipe) id: number) {
        return {id}
    }

    @Post()
    store(@Body(ValidationPipe) user: UserDTO){
        return {
            ...user,
            'type': 'Create user'
        };
    }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, type: 'update', ...userUpdate };
  }

  @Delete(':id')
  delete_user(@Param('id') id: string) {
    return {
      type: 'delete user',
      user: id,
    };
  }
}
