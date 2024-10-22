import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  time: string;

  @Prop()
  permanent: string;

  @Prop()
  reason: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
