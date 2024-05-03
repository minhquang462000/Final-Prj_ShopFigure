import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, Req, UploadedFile, BadRequestException, ParseArrayPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageConfig } from 'src/configs/config-uploadImg';
import { extname } from 'path';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiResponse({ status: 201, description: 'Forbidden' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiTags('Products')
@Controller('api/v1/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('thumbnail',{storage:storageConfig('category'),
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
    create(@Req() req: any, @Body() CreateCategoryDto: CreateCategoryDto,@UploadedFile() thumbnail: Express.Multer.File) {
      if (req.fileValidationError) {
        throw new BadRequestException(req.fileValidationError);
        }
        if (thumbnail) {
          CreateCategoryDto.thumbnail = 'category' + '/' + thumbnail.filename
        }
       return this.categoryService.create(CreateCategoryDto);
  
    }
  @Get()
  findAll(@Query() query:any):Promise<any> {
    return this.categoryService.findAll(query);
  }

  @Delete('multiple')
  multipleDelete(@Query('ids', new ParseArrayPipe({ items: String, separator: ',' })) ids: string[]) {
      return this.categoryService.multipleDelete(ids)
  }
  @Get('all')
 findAllCategory():Promise<any> {
    return this.categoryService.findAllCategory();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('thumbnail',{storage:storageConfig('category'),
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
  update(@Req() req,@Param('id') id: string, @Body() updateCategoryDto: any,@UploadedFile() thumbnail: Express.Multer.File) {
    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
      }
      if (thumbnail) {
      updateCategoryDto.thumbnail = 'category'+'/'+ thumbnail.filename
      }
       return this.categoryService.update(+id, updateCategoryDto);
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
