import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserDocument } from './user.schema';
import { Language, LanguageDocument } from './language.schema';
import { ThemeDocument } from './theme.schema';
import { TypeStyle } from './typeStyle.schema';

export type SettingDocument = Setting & Document;

@Schema()
export class Setting {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' })
  language: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Themes' })
  themes: mongoose.Schema.Types.ObjectId[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TypeStyled' })
  typeStyle: mongoose.Schema.Types.ObjectId;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
