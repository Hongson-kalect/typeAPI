import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpecialRuleDocument = SpecialRule & Document;

@Schema()
export class SpecialRule {
  @Prop()
  typeStyle: string;

  @Prop()
  input: string;

  @Prop()
  output: string;
}

export const SpecialRuleSchema = SchemaFactory.createForClass(SpecialRule);
