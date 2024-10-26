import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report, ReportDocument } from 'src/database/schemas/report.schema';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel(Report.name) private userModel: Model<ReportDocument>,
  ) {}

  async createReport({ age, name }: CreateReportDto): Promise<Report> {
    const newReport = new this.userModel({ name, age });
    return newReport.save();
  }

  async findAll(): Promise<Report[]> {
    return this.userModel.find().exec();
  }
}
