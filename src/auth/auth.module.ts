import {UsersModule} from "../users/users.module";
import {AuthService} from "./auth.service";
import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/user.entity";


@Module({
    imports:[
        UsersModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '1800s'}
        })],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService]
})

export class AuthModule {}