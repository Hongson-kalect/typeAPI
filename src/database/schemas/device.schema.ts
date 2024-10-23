import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema()
export class Device {
  @Prop()
  username: string;

  @Prop()
  ip: string;

  @Prop()
  time: string;

  @Prop()
  location: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
