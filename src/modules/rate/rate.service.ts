import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rate, RateDocument } from 'src/database/schemas/rate.schema';
import { CreateRateDto } from './dto/create-rate.dto';

@Injectable()
export class RateService {
  constructor(@InjectModel(Rate.name) private userModel: Model<RateDocument>) {}

  async createRate({ age, name }: CreateRateDto): Promise<Rate> {
    const newRate = new this.userModel({ name, age });
    return newRate.save();
  }

  async findAll(): Promise<Rate[]> {
    return this.userModel.find().exec();
  }
}
