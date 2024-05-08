
require('dotenv').config();
import { InfoEntity } from 'src/modules/databases/Info.entity';
import { BrandEntity } from 'src/modules/databases/brand.entity';
import { CartEntity } from 'src/modules/databases/cart.entity';
import { CategoryEntity } from 'src/modules/databases/category.entity';
import { CharacterEntity } from 'src/modules/databases/character.entity';
import { CommentEntity } from 'src/modules/databases/comment.entity';
import { FavouriteEntity } from 'src/modules/databases/favourite.entity';
import { HistoryEntity } from 'src/modules/databases/history.entity';
import { PostEntity } from 'src/modules/databases/post.entity';
import { ProductEntity } from 'src/modules/databases/product.entity';
import { SaleEntity } from 'src/modules/databases/sale.entity';
import { SeriesEntity } from 'src/modules/databases/series.entity';
import { UserEntity } from 'src/modules/databases/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserEntity,ProductEntity,CartEntity,BrandEntity,CategoryEntity,CharacterEntity,
    CommentEntity,FavouriteEntity,InfoEntity,SaleEntity,PostEntity,SeriesEntity,HistoryEntity
  ],
  synchronize: true,
};