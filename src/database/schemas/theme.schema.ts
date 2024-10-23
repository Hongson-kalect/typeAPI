import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop()
  rate: string;
}

export const ThemeSchema = SchemaFactory.createForClass(Theme);
