import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LanguageDocument = Language & Document;

@Schema()
export class Language {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  flag: string;

  @Prop()
  desc: string;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
