import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StoreDocument = Store & Document;

@Schema()
export class Store {
  @Prop()
  theme: string;

  @Prop()
  price: string;

  @Prop()
  unit: string;

  @Prop()
  desc: string;

  @Prop()
  rate: string;

  // @Prop()
  // ban: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
