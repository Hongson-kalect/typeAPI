import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { TypeStyle } from './typeStyle.schema';

export type SpecialRuleDocument = SpecialRule & Document;

@Schema()
export class SpecialRule {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TypeStyled' })
  typeStyle: TypeStyle;

  @Prop()
  input: string;

  @Prop()
  output: string;
}

export const SpecialRuleSchema = SchemaFactory.createForClass(SpecialRule);
