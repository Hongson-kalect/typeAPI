import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserDocument } from './user.schema';

export type RankDocument = Rank & Document;

@Schema()
export class Rank {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;

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
  desc: string;
}

export const RankSchema = SchemaFactory.createForClass(Rank);
