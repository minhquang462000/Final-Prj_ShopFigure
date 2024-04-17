import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostEntity } from './database/post.entity';
import { UserEntity } from '../user/database/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CharacterEntity } from '../character/database/character.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity,UserEntity,CharacterEntity]),ConfigModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
