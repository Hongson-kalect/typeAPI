import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User, UserDocument } from './user.schema';

export type DeviceDocument = Device & Document;

@Schema()
export class Device {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: UserDocument;

  @Prop()
  ip: string;

  @Prop()
  time: string;

  @Prop()
  location: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
