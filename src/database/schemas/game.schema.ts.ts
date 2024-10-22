import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop()
  name: string;

  @Prop()
  tag: string;

  @Prop()
  genre: string;

  @Prop()
  language: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
