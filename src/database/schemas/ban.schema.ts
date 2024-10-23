import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BanDocument = Ban & Document;

@Schema()
export class Ban {
  @Prop()
  username: string;

  @Prop()
  time: string;

  @Prop()
  permanent: string;

  @Prop()
  reason: string;
}

export const BanSchema = SchemaFactory.createForClass(Ban);
