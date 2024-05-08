import { storageConfig } from './../../configs/config-uploadImg';
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Query,
    UseInterceptors,
    UploadedFile,
    Req,
    BadRequestException,
    ParseArrayPipe,
  } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthGuard } from 'src/shared/guard/auth.guard';
import { FilterUserDto } from './dtos/filter.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { UserService } from './user.service';
@ApiBearerAuth()
@ApiResponse({ status: 201, description: 'ok baby'})
@ApiResponse({ status: 403, description: 'Forbidden'})
// @UseGuards(AuthGuard)
  @ApiTags('Users')
  @Controller('api/v1/users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post()
    // @UseGuards(AuthGuard)
    // @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('avatar',{storage:storageConfig('avatar'),
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
    create(@Req() req,@Body() createUserDto: any,@UploadedFile() avatar: Express.Multer.File) {
      if (req.fileValidationError) {
          throw new BadRequestException(req.fileValidationError);
          }
          if (avatar) {
          createUserDto.avatar = avatar.fieldname+'/'+ avatar.filename
          }
          console.log(createUserDto);
          
           return this.userService.create(createUserDto);
    }
    @Get()
    // @UseGuards(AuthGuard)
    findAll(@Query() query:FilterUserDto): any{
      return this.userService.findAll(query);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.userService.findOne(+id);
    }
  
    @Patch(':id')
    @UseInterceptors(FileInterceptor('avatar',{storage:storageConfig('avatar'),
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
    update(@Req() req,@Param('id') id: string, @Body() updateUserDto: any,@UploadedFile() avatar: Express.Multer.File) {
      if (req.fileValidationError) {
        throw new BadRequestException(req.fileValidationError);
        }
        if (avatar) {
        updateUserDto.avatar = avatar.fieldname+'/'+ avatar.filename
        }
         return this.userService.update(+id, updateUserDto);
  }

    
  //   // Upload Avatar
  // @Post('upload-avatar')
  // @UseInterceptors(FileInterceptor('avatar',{storage:storageConfig('avatar'),
  //   fileFilter: (req, file, cb) => {
  //    const ext = extname(file.originalname);
  //    const allowedExtArr = ['.png','.jpg','.jpeg'];
  //    if (!allowedExtArr.includes(ext)) {
  //     req.fileValidationError = `Only images are :${allowedExtArr.toString()} `;
  //     return cb(null, false);
  //    }
  //    const fileSize = parseInt(req.headers['content-length']);
  //    if (fileSize > 1024*1024*5) {
  //     req.fileValidationError = 'File size is too large. Acceptable size is 5MB';
  //     return cb(null, false);
  //    }
  //    return cb(null, true);
  //   }
  // }))
  // upLoadAvatar(@Req() req: any,@UploadedFile() file: Express.Multer.File) {
  //   if (req.fileValidationError) {
  //   throw new BadRequestException(req.fileValidationError);
  //   }
  //   if (!file) {
  //     throw new BadRequestException('File not found');
  //   }
  //    return this.userService.updateAvatar(req.user_data.id,file.destination+'/'+file.filename);
  // }
  @Delete('multiple')
  multipleDelete(
      @Query('ids', new ParseArrayPipe({ items: String, separator: ',' }))
      ids: string[]
  ) {
      return this.userService.multipleDelete(ids)
  }
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.userService.remove(+id);
    }
  }
  