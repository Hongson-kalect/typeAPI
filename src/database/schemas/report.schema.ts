import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserDocument } from './user.schema';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;

  @Prop()
  type: string; //report cho cái gì

  @Prop()
  itemId: string;

  @Prop()
  reportType: string; // loại report

  @Prop()
  desc: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
