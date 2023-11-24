import {Injectable} from "@nestjs/common";
//import {User} from "./interfaces/users.controller.interface";
import {UpdateUserDto} from "./dto/updateUser.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity"
import {Repository, UpdateResult} from "typeorm";
import {CreateUserDto} from "./dto/create-users.dto";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.name = createUserDto.name;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        return this.usersRepository.save(user);
    }

    async findAll():Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({id})
    }

    async update(id: number, user: Partial<User>): Promise<User> {
        await this.usersRepository.update(id, user);
        return this.usersRepository.findOne({where: {id}});
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id)
    }


}