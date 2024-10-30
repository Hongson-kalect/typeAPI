import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ThemeDocument = Theme & Document;

@Schema()
export class Theme {
  @Prop()
  type: string;

  @Prop()
  src: string;

  @Prop()
  style: string;

  @Prop()
  desc: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Rate' })
  rate: mongoose.Schema.Types.ObjectId;
}

export const ThemeSchema = SchemaFactory.createForClass(Theme);
