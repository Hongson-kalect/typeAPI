import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserDocument } from './user.schema';

export type RateDocument = Rate & Document;

@Schema()
export class Rate {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;

  @Prop()
  type: string; //bản dịch hoặc bản gốc, theme hay sound hay ....

  @Prop()
  itemId: string;

  @Prop()
  rate: string;

  @Prop()
  crossPlatform: string;

  @Prop()
  platformID: string;

  @Prop()
  recoverEmail: string;

  @Prop()
  desc: string;
}

export const RateSchema = SchemaFactory.createForClass(Rate);
