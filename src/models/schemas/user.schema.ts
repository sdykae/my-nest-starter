import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  public name?: string;
  @Prop({ type: [String] })
  public jobs?: string[];
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
