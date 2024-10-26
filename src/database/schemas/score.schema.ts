import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserDocument } from './user.schema';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
  user: UserDocument;

  @Prop()
  type: string; // game hay bài gõ

  @Prop()
  itemId: string;

  @Prop()
  wps: string;

  @Prop()
  cps: string;

  @Prop()
  score: string;

  @Prop()
  wa: string;

  @Prop()
  time: number; //milisecond

  @Prop()
  ca: string;

  // @Prop()
  // user: string;
  // @Prop()
  // para: string;

  //score cho game hay cho bài gõ hay cho bài viết. Để chung hay ko?
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
