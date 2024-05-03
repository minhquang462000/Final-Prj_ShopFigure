import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, UploadedFile, BadRequestException, Req } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageConfig } from 'src/configs/config-uploadImg';
import { extname } from 'path';
import { FilterBrandDto } from './dto/filter-brand.dto';

@Controller('api/v1/brand')

@ApiBearerAuth()
@ApiResponse({ status: 201, description: 'Forbidden' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiTags('Brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @UseInterceptors(FileInterceptor('thumbnail',{storage:storageConfig('brand'),
    fileFilter: (req, file, cb) => {
    const ext = extname(file.originalname);
    const allowedExtArr = ['.png','.jpg','.jpeg'];
    if (!allowedExtArr.includes(ext)) {
      req.fileValidationError = `Only images are :${allowedExtArr.toString()} `;
      return cb(null, false);
    }
    const fileSize = parseInt(req.headers['content-length']);
    if (fileSize > 1024*1024*5) {
      req.fileValidationError = 'File size is too large. Acceptable size is 5MB';
      return cb(null, false);
    }
     return cb(null, true);
    }}))
    create(@Req() req: any, @Body() createBrandDto: CreateBrandDto,@UploadedFile() thubnail: Express.Multer.File) {
      if (req.fileValidationError) {
        throw new BadRequestException(req.fileValidationError);
        }
        if (thubnail) {
        createBrandDto.thumbnail = 'brand'+ '/' + thubnail.filename;
        }
       return this.brandService.create(createBrandDto);
  
    }
  @Get('all')
  findAllBrand() {
    return this.brandService.findAllBrand();
  }
  @Get()
  findAll(@Query() query:FilterBrandDto):Promise<any> {
    return this.brandService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('thumbnail',{storage:storageConfig('brand'),
  fileFilter: (req, file, cb) => {
   const ext = extname(file.originalname);
   const allowedExtArr = ['.png','.jpg','.jpeg'];
   if (!allowedExtArr.includes(ext)) {
    req.fileValidationError = `Only images are :${allowedExtArr.toString()} `;
    return cb(null, false);
   }
   const fileSize = parseInt(req.headers['content-length']);
   if (fileSize > 1024*1024*5) {
    req.fileValidationError = 'File size is too large. Acceptable size is 5MB';
    return cb(null, false);
   }
   return cb(null, true);
  }
}))
  update(@Req() req,@Param('id') id: string, @Body() updateBrandDto: any,@UploadedFile() thumbnail: Express.Multer.File) {
    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
      }
      if (thumbnail) {
      updateBrandDto.thumbnail = 'brand'+'/'+ thumbnail.filename
      }
       return this.brandService.update(+id, updateBrandDto);
}


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}
