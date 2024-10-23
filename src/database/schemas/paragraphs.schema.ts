import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const ParagraphSchema = SchemaFactory.createForClass(Paragraph);
