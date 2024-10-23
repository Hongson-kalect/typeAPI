import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AssetDocument = Asset & Document;

@Schema()
export class Asset {
  @Prop()
  gold: string;

  @Prop()
  crystal: string;

  /////
  @Prop()
  theme: string;

  @Prop()
  username: string;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
