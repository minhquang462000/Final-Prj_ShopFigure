// cloudinary.module.ts
import { Module } from '@nestjs/common';
import { CloudinaryProvider } from 'src/configs/cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';


@Module({
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryProvider, CloudinaryService

  ]
})
export class CloudinaryModule {}
