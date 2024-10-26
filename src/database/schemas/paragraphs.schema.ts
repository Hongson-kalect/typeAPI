import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { Novel, NovelDocument } from './novel.schema';

export type ParagraphDocument = Paragraph & Document;

@Schema()
export class Paragraph {
  @Prop()
  novel: string;

  @Prop()
  language: string;

  @Prop()
  header: string;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  desc: string;

  @Prop()
  rate: string;

  @Prop()
  rateTime: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: UserDocument;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Novel' })
  Novel: NovelDocument;
}

export const ParagraphSchema = SchemaFactory.createForClass(Paragraph);
