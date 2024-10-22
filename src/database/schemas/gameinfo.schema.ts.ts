import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
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

export const UserSchema = SchemaFactory.createForClass(User);
