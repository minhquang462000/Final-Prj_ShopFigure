
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { join } from 'path';
import {NestExpressApplication} from '@nestjs/platform-express'
// require('dotenv').config();



const PORT = process.env.PORT || 3001;
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors: true});
 
  const config = new DocumentBuilder()
  .setTitle('Shopfigure API')
  .setDescription('The Shopfigure API description')
  .setVersion('1.0')
  .addTag('Auth')
  .addTag('Users')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors(  );
 
//  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT , () => console.log(`Listening on port ${PORT}`));
}
bootstrap();
