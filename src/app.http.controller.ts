import {
  Body,
  Controller,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { CreateUserDto } from './models/dtos/create-user.dto';
import { MongoValidationErrorFilter } from './models/filters/mongo-exception.filter';
import { UserDocument } from './models/schemas/user.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('user')
  @ApiOkResponse({ type: CreateUserDto, description: 'create user dto' })
  @UsePipes(new ValidationPipe())
  @UseFilters(MongoValidationErrorFilter)
  createUser(@Body() createUserDto: CreateUserDto): Observable<UserDocument> {
    return this.appService.create(createUserDto);
  }
}
