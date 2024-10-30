import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ThemeDocument } from './theme.schema';

export type StoreDocument = Store & Document;

@Schema()
export class Store {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Theme' })
  theme: mongoose.Schema.Types.ObjectId;

  @Prop()
  price: string;

  @Prop()
  unit: string;

  @Prop()
  desc: string;

  @Prop()
  rate: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
