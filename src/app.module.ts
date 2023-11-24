import {Module, ValidationPipe} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {AuthModule} from "./auth/auth.module";
import {APP_PIPE} from "@nestjs/core";
import {TypeOrmModule} from "@nestjs/typeorm"
import {ConfigModule} from "@nestjs/config"

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "ROOT",
            database: "test",
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize:true
        }),
        UsersModule,
        AuthModule
            ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_PIPE,
            useClass: ValidationPipe}]
        })
export class AppModule {}
