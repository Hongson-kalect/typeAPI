import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';

export type DeviceDocument = Device & Document;

@Schema()
export class Device {
  @Prop()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  ip: string;

  @Prop()
  time: string;

  @Prop()
  location: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
