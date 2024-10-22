import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  user: string;

  //đăng nhập

  @Prop()
  game: string;

  @Prop()
  rank: number;

  @Prop()
  score: string;

  @Prop()
  time: string;
  //thời gian hoàn thành ải or game chứ ko phải time tạo

  @Prop()
  recoverEmail: string;

  @Prop()
  ban: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
