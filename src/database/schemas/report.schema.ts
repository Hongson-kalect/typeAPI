import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  type: string; //report cho cái gì

  @Prop()
  reportType: string; // loại report

  @Prop()
  desc: string;

  @Prop()
  recoverEmail: string;

  @Prop()
  ban: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
