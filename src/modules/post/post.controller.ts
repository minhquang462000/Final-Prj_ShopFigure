import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Req, BadRequestException, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { storageConfig } from 'src/configs/config-uploadImg';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { FilterPostDto } from './dto/filter-post.dto';

@ApiBearerAuth()
@ApiResponse({ status: 201, description: 'Forbidden' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiTags('Post')
@Controller('api/v1/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @UseInterceptors(FileInterceptor('thumbnail',{storage:storageConfig('post'),
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
    create(@Req() req: any, @Body() CreatePostDto: CreatePostDto,@UploadedFile() file: Express.Multer.File) {
      if (req.fileValidationError) {
        throw new BadRequestException(req.fileValidationError);
        }
        if (!file) {
          throw new BadRequestException('File not found');
        }
       return this.postService.create({...CreatePostDto,thumbnail:file.destination+'/'+file.filename});
  
    }
  @Get()
  findAll(@Query() query:FilterPostDto):Promise<any> {
    return this.postService.findAll(query);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
