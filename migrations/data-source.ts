// import { DataSource, DataSourceOptions } from "typeorm";

// export const dataSourceOption:DataSourceOptions = {
//     type: 'mysql',
//     host: process.env.DB_HOST || 'localhost',
//     port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     entities: ['dist/**/*.entity{.ts,.js}'],
//     migrations: ['dist/migrations/*.js'],
//     migrationsTableName: 'migrations_typeorm',
//     synchronize: false,
// }



// const dataSource = new DataSource(dataSourceOption);
// export default dataSource