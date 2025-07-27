import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    index(){
        return 'test';
    }

    // users/intern
    @Get('intern')
    find_interns(){
        return 'interns';
    }
    // users/1
    @Get(':id')
    find_user(@Param('id') id: string) {
        return {id}
    }

    @Post()
    store(@Body() user: {}){
        return user;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: {}){
        return {id, 'type': 'update', ...userUpdate}
    }

    @Delete(':id')
    delete_user(@Param('id') id: string){
        return {
            'type': 'delete user',
            'user': id
        };
    }

}
