import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop()
  born: number;

  @Prop()
  gender: boolean;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  nation: string;

  @Prop()
  avatar: string;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(Profile);
