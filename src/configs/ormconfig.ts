
require('dotenv').config();
import { CategoryEntity } from 'src/modules/category/database/category.entity';
import { CharacterEntity } from 'src/modules/character/database/character.entity';
import { PostEntity } from 'src/modules/post/database/post.entity';
import { UserEntity } from 'src/modules/user/database/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserEntity, PostEntity, CategoryEntity,CharacterEntity],
  synchronize: true,
};