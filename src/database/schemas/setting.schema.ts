import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SettingDocument = Setting & Document;

@Schema()
export class Setting {
  @Prop()
  user: string;

  @Prop()
  language: string;

  @Prop()
  themes: string;

  @Prop()
  typeStyle: string;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
