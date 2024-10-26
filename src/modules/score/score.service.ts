import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Score, ScoreDocument } from 'src/database/schemas/score.schema';
import { CreateScoreDto } from './dto/create-score.dto';

@Injectable()
export class ScoreService {
  constructor(
    @InjectModel(Score.name) private userModel: Model<ScoreDocument>,
  ) {}

  async createScore({ age, name }: CreateScoreDto): Promise<Score> {
    const newScore = new this.userModel({ name, age });
    return newScore.save();
  }

  async findAll(): Promise<Score[]> {
    return this.userModel.find().exec();
  }
}
