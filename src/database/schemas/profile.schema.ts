import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User, UserDocument } from './user.schema';

export type ProfileDocument = Profile & Document;

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
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
