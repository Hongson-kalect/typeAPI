import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WordRateDocument = WordRate & Document;

@Schema()
export class WordRate {
  @Prop()
  language: string;

  @Prop()
  rate: string; //json

  @Prop()
  level: string;

  @Prop()
  desc: string;
}

export const WordRateSchema = SchemaFactory.createForClass(WordRate);
