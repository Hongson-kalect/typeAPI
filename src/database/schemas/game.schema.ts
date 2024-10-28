import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { GameInfo, GameInfoDocument } from './gameinfo.schema';

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
  gameInfo: mongoose.Schema.Types.ObjectId;

  @Prop()
  defaultLanguage: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
