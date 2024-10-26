import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rank, RankDocument } from 'src/database/schemas/rank.schema';
import { CreateRankDto } from './dto/create-rank.dto';

@Injectable()
export class RankService {
  constructor(@InjectModel(Rank.name) private userModel: Model<RankDocument>) {}

  async createRank({ age, name }: CreateRankDto): Promise<Rank> {
    const newRank = new this.userModel({ name, age });
    return newRank.save();
  }

  async findAll(): Promise<Rank[]> {
    return this.userModel.find().exec();
  }
}
