import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.http.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './models/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/dir-core'),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
