import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {
  @Prop()
  username: string;

  @Prop()
  type: string; //paras, theme, author

  @Prop()
  id: string;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
