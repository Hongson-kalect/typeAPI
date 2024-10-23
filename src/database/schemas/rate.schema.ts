import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RateDocument = Rate & Document;

@Schema()
export class Rate {
  @Prop()
  username: string;

  type: string; //bản dịch hoặc bản gốc, theme hay sound hay ....

  @Prop()
  rate: string;

  @Prop()
  crossPlatform: string;

  @Prop()
  platformID: string;

  @Prop()
  recoverEmail: string;

  @Prop()
  ban: string;
}

export const RateSchema = SchemaFactory.createForClass(Rate);
