import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User, UserDocument } from './user.schema';

export type BanDocument = Ban & Document;

@Schema()
export class Ban {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;

  @Prop()
  time: string;

  @Prop()
  permanent: string;

  @Prop()
  reason: string;
}

export const BanSchema = SchemaFactory.createForClass(Ban);
