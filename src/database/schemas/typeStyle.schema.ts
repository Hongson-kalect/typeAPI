import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Language, LanguageDocument } from './language.schema';

export type TypeStyleDocument = TypeStyle & Document;

@Schema()
export class TypeStyle {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' })
  language: mongoose.Schema.Types.ObjectId;

  @Prop()
  code: string;
}

export const TypeStyleSchema = SchemaFactory.createForClass(TypeStyle);
