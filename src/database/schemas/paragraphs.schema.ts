import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { Novel, NovelDocument } from './novel.schema';
import { LanguageDocument } from './language.schema';

export type ParagraphDocument = Paragraph & Document;

@Schema()
export class Paragraph {
  // @Prop()

  _id?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Language' })
  language: Types.ObjectId;

  @Prop()
  header: string;

  @Prop()
  content: string;

  @Prop()
  desc: string;

  @Prop()
  rate: string;

  @Prop()
  rateTime: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;

  // @Prop({ type: Types.ObjectId, ref: 'Novel' })
  // Novel: NovelDocument;
}

export const ParagraphSchema = SchemaFactory.createForClass(Paragraph);
