import { Injectable } from "@nestjs/common";
import { User } from "./interfaces/users.controller.interface";
import { UpdateUserDto } from "./dto/updateUser.dto";


@Injectable()
export class UsersService {
  private readonly users: User[] = [{id: 1, name: "Denis", email: "asd@mail.ru"}];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  update(dto: UpdateUserDto) {
    const updatedUsers = this.users.map(user => {
      if (user.id == dto.id) {
          user.name = dto.name
          user.email = dto.email
      }
      return "user  updated"
    })
  }

  remove(user: User) {
    let index = this.users.findIndex(el => el.name == user.name) // TODO: используй метод filter, посмотри как используется, этого достаточно
    delete this.users[index]
  }
}