import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../databases/user.entity";
import { UserController } from "./user.controller";
import { ConfigModule } from "@nestjs/config";
import { UserService } from "./user.service";




@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]),ConfigModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}