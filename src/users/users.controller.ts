import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-users.dto";
import { User } from "./interfaces/users.controller.interface";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/updateUser.dto";
import {DeleteUserDto} from "./dto/deleteUser.dto";


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto)
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: number,@Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(updateUserDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: number, @Body() deleteUserDto: DeleteUserDto) {
        return this.usersService.remove(deleteUserDto)
    }
}