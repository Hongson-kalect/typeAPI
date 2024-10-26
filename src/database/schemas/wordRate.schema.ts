import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { LanguageDocument } from './language.schema';

export type WordRateDocument = WordRate & Document;

@Schema()
export class WordRate {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' })
  language: LanguageDocument;

  @Prop()
  rate: string; //json

  @Prop()
  level: string;

  @Prop()
  desc: string;
}

export const WordRateSchema = SchemaFactory.createForClass(WordRate);
