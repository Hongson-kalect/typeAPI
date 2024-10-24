import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
  @Prop()
  user: number;

  @Prop()
  type: string; // game hay bài gõ

  @Prop()
  wps: string;

  @Prop()
  cps: string;

  @Prop()
  score: string;

  @Prop()
  wa: string;

  @Prop()
  ca: string;

  // @Prop()
  // user: string;
  // @Prop()
  // para: string;

  //score cho game hay cho bài gõ hay cho bài viết. Để chung hay ko?
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
