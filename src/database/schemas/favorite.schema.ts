import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';
import { Paragraph } from './paragraphs.schema';

export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  type: string; //paras, theme, author

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  paragraph: Paragraph;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
