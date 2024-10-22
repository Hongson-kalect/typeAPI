import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  flag: string;

  @Prop()
  desc: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
