import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Req, BadRequestException, Query } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { storageConfig } from 'src/configs/config-uploadImg';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

@ApiBearerAuth()
@ApiResponse({ status: 201, description: 'Forbidden' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiTags('Series')
@Controller('api/v1/categories')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('thumbnail',{storage:storageConfig('series'),
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
    create(@Req() req: any, @Body() createSeriesDto: CreateSeriesDto,@UploadedFile() file: Express.Multer.File) {
      if (req.fileValidationError) {
        throw new BadRequestException(req.fileValidationError);
        }
        if (!file) {
          throw new BadRequestException('File not found');
        }
       return this.seriesService.create({...createSeriesDto,thumbnail:file.destination+'/'+file.filename});
  
    }
  @Get()
  findAll(@Query() query:any):Promise<any> {
    return this.seriesService.findAll(query);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeriesDto: UpdateSeriesDto) {
    return this.seriesService.update(+id, updateSeriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriesService.remove(+id);
  }
}
