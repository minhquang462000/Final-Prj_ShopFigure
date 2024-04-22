import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostEntity } from '../databases/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]),ConfigModule],
  controllers: [PostController],
  exports: [PostService],
  providers: [PostService],
})
export class PostModule {}
