import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';

export type BanDocument = Ban & Document;

@Schema()
export class Ban {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  time: string;

  @Prop()
  permanent: string;

  @Prop()
  reason: string;
}

export const BanSchema = SchemaFactory.createForClass(Ban);
