import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  defaultlanguage: string;

  @Prop()
  user: string;

  @Prop()
  level: string;

  @Prop()
  rate: string;

  @Prop()
  rateTime: string;
  @Prop()
  chapter: string;

  @Prop()
  price: string;

  @Prop()
  prev: string;

  @Prop()
  next: string;

  @Prop()
  tag: string;

  @Prop()
  desc: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
