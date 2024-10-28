import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { LanguageDocument } from './language.schema';

export type WordDocument = Word & Document;

@Schema()
export class Word {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' })
  language: mongoose.Schema.Types.ObjectId;

  @Prop()
  level: string;

  @Prop()
  type: string;

  @Prop()
  words: string;

  @Prop()
  desc: string;
}

export const WordSchema = SchemaFactory.createForClass(Word);
