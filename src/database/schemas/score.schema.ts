import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserDocument } from './user.schema';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
  user: mongoose.Schema.Types.ObjectId;

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
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
