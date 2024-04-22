import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, Req, UploadedFile, BadRequestException } from '@nestjs/common';
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
    create(@Req() req: any, @Body() CreateCategoryDto: CreateCategoryDto,@UploadedFile() file: Express.Multer.File) {
      if (req.fileValidationError) {
        throw new BadRequestException(req.fileValidationError);
        }
        if (!file) {
          throw new BadRequestException('File not found');
        }
       return this.categoryService.create({...CreateCategoryDto,thumbnail:file.destination+'/'+file.filename});
  
    }
  @Get()
  findAll(@Query() query:any):Promise<any> {
    return this.categoryService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
