import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Language } from './language.schema';
import { User } from './user.schema';
import { Paragraph, ParagraphDocument } from './paragraphs.schema';

export type NovelDocument = Novel & Document;

@Schema()
export class Novel {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' })
  defaultlanguage: Language;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  level: string;

  @Prop()
  rate: string;

  @Prop()
  rateTime: string;

  @Prop()
  chapter: string;

  @Prop()
  price: string;

  @Prop()
  prev: string;

  @Prop()
  next: string;

  @Prop()
  tag: string;

  @Prop()
  desc: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Paragraph' })
  paragraphs: ParagraphDocument[];
}

export const NovelSchema = SchemaFactory.createForClass(Novel);
