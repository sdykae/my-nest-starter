import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { CreateUserDto } from './models/dtos/create-user.dto';
import { User, UserDocument } from './models/schemas/user.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  getHello(): string {
    return 'Hello World!';
  }
  create(createUserDto: CreateUserDto): Observable<UserDocument> {
    const user = new this.userModel(<User>{
      name: createUserDto.name,
      jobs: createUserDto.jobs,
    });
    return from(user.save());
  }
}
