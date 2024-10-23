import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WordDocument = Word & Document;

@Schema()
export class Word {
  @Prop()
  language: string;

  @Prop()
  type: string;

  @Prop()
  words: string;

  @Prop()
  desc: string;
}

export const WordSchema = SchemaFactory.createForClass(Word);
