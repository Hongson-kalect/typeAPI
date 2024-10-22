import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  type: string; //paras, theme, author

  @Prop()
  id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
