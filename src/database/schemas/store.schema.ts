import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ThemeDocument } from './theme.schema';

export type StoreDocument = Store & Document;

@Schema()
export class Store {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Theme' })
  theme: ThemeDocument;

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
