import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  WordRate,
  WordRateDocument,
} from 'src/database/schemas/wordRate.schema';
import { CreateWordRateDto } from './dto/create-wordRate.dto';

@Injectable()
export class WordRateService {
  constructor(
    @InjectModel(WordRate.name) private userModel: Model<WordRateDocument>,
  ) {}

  async createWordRate({ age, name }: CreateWordRateDto): Promise<WordRate> {
    const newWordRate = new this.userModel({ name, age });
    return newWordRate.save();
  }

  async findAll(): Promise<WordRate[]> {
    return this.userModel.find().exec();
  }
}
