import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  novel: string;

  @Prop()
  language: string;

  @Prop()
  header: string;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  desc: string;

  @Prop()
  rate: string;

  @Prop()
  rateTime: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
