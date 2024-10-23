import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop()
  name: string;

  @Prop()
  tag: string;

  @Prop()
  genre: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'GameInfo' })
  gameInfo: string;

  @Prop()
  defaultLanguage: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
