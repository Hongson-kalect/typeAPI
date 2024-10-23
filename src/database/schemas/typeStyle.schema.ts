import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TypeStyleDocument = TypeStyle & Document;

@Schema()
export class TypeStyle {
  @Prop()
  language: string;

  @Prop()
  code: string;
}

export const TypeStyleSchema = SchemaFactory.createForClass(TypeStyle);
