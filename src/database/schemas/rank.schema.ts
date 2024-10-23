import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RankDocument = Rank & Document;

@Schema()
export class Rank {
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

export const RankSchema = SchemaFactory.createForClass(Rank);
