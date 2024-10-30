import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Theme } from './theme.schema';
import { User, UserDocument } from './user.schema';

export type AssetDocument = Asset & mongoose.Document;

@Schema()
export class Asset {
  @Prop()
  gold: string;

  @Prop()
  crystal: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Theme' }] })
  themes: mongoose.Schema.Types.ObjectId[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
