import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./database/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ConfigModule } from "@nestjs/config";
import { PostEntity } from "../post/database/post.entity";




@Module({
    imports: [TypeOrmModule.forFeature([UserEntity,PostEntity]),ConfigModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}