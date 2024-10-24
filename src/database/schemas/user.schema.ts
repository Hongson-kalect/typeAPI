import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  crossPlatform: string;

  @Prop()
  platformID: string;

  @Prop()
  recoverEmail: string;

  @Prop()
  ban: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
