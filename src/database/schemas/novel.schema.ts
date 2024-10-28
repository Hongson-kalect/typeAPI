import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Language } from './language.schema';
import { User } from './user.schema';
import { Paragraph, ParagraphDocument } from './paragraphs.schema';

export type NovelDocument = Novel & Document;

@Schema()
export class Novel {
  @Prop({ type: Types.ObjectId, ref: 'Language' })
  defaultlanguage: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;

  @Prop()
  level: string;

  @Prop()
  seri: string;

  @Prop()
  defaultLanguage: string;

  @Prop()
  rate: string;

  @Prop()
  rateTime: string;

  @Prop()
  chapter: string;

  @Prop()
  price: string;

  @Prop()
  unit: string;

  @Prop()
  prev: string;

  @Prop()
  next: string;

  @Prop()
  tag: string;

  @Prop()
  desc: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Paragraph' }] })
  paragraphs: Types.ObjectId[];
}

export const NovelSchema = SchemaFactory.createForClass(Novel);
