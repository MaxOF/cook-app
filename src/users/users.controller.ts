import {Body, Controller, Delete, Get, Param, Patch, Post, Put, ValidationPipe} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/updateUser.dto";
import {User} from "./user.entity"



@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto)
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.usersService.findOne(id)
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Put(':id')
    async update (@Param('id') id: number, @Body() user: User): Promise<any> {
      return this.usersService.update(id, user)
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.usersService.remove(id)
    }
}