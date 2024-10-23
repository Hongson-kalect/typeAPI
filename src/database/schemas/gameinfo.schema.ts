import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameInfoDocument = GameInfo & Document;

@Schema()
export class GameInfo {
  @Prop()
  game: string;

  @Prop()
  played: string;

  @Prop()
  isNew: string;

  @Prop()
  dohot: string; //độ sôi nổi của game

  @Prop()
  recoverEmail: string;

  @Prop()
  ban: string;
}

export const GameInfoSchema = SchemaFactory.createForClass(GameInfo);
