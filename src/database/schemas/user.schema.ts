import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ProfileDocument } from './profile.schema';
import { SettingDocument } from './setting.schema';
import { AssetDocument } from './asset.schema';
import { DeviceDocument } from './device.schema';
import { NovelDocument } from './novel.schema';
import { ParagraphDocument } from './paragraphs.schema';

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' })
  profile: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Setting' })
  setting: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' })
  asset: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'device' })
  device: mongoose.Schema.Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
