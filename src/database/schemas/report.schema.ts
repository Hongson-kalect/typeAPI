import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RateDocument = Rate & Document;

@Schema()
export class Rate {
  @Prop()
  username: string;

  @Prop()
  type: string; //report cho cái gì

  @Prop()
  reportType: string; // loại report

  @Prop()
  desc: string;

  @Prop()
  recoverEmail: string;

  @Prop()
  ban: string;
}

export const RateSchema = SchemaFactory.createForClass(Rate);
