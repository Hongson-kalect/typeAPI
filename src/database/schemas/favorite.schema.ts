import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { Paragraph, ParagraphDocument } from './paragraphs.schema';

export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;

  @Prop()
  type: string; //paras, theme, author

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  paragraph: mongoose.Schema.Types.ObjectId;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
