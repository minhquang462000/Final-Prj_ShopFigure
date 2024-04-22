import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, Req, UploadedFile, BadRequestException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FilterProductDto } from './dto/filter-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageConfig } from 'src/configs/config-uploadImg';
import { extname } from 'path';

@Controller('api/v1/products')

@ApiBearerAuth()
@ApiResponse({ status: 201, description: 'Forbidden' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FileInterceptor('images',{storage:storageConfig('product'),
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
  create(@Req() req: any, @Body() createProductDto: CreateProductDto,@UploadedFile() file: Express.Multer.File) {
    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
      }
      if (!file) {
        throw new BadRequestException('File not found');
      }
     return this.productService.create({...createProductDto,images:file.destination+'/'+file.filename});

  }

  @Get()
  findAll(@Query() query: FilterProductDto):Promise<any> {
    return this.productService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
