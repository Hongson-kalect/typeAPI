import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  ip: string;

  @Prop()
  time: string;

  @Prop()
  location: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
