import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Game, GameDocument } from './game.schema';
import { Language } from './language.schema';

export type GameInfoDocument = GameInfo & Document;

@Schema()
export class GameInfo {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' })
  defaultLanguage: mongoose.Schema.Types.ObjectId;

  @Prop()
  played: number;

  @Prop()
  stage: string;

  @Prop()
  complteled: number;

  @Prop()
  isNew: boolean;

  @Prop()
  dohot: string; //độ sôi nổi của game

  @Prop()
  recoverEmail: string;

  @Prop()
  ban: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Game' })
  game: mongoose.Schema.Types.ObjectId;
}

export const GameInfoSchema = SchemaFactory.createForClass(GameInfo);
