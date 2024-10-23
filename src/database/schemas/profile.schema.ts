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
  displayName: string;

  @Prop()
  nation: string;

  @Prop()
  avatar: string;

  @Prop()
  role: string;

  // assoication
  @Prop()
  user: UserDocument;
}

export const UserSchema = SchemaFactory.createForClass(Profile);
