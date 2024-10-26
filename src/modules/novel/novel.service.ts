import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from 'src/database/schemas/novel.schema';
import { CreateNovelDto } from './dto/create-novel.dto';

@Injectable()
export class NovelService {
  constructor(
    @InjectModel(Novel.name) private userModel: Model<NovelDocument>,
  ) {}

  async createNovel({ age, name }: CreateNovelDto): Promise<Novel> {
    const newNovel = new this.userModel({ name, age });
    return newNovel.save();
  }

  async findAll(): Promise<Novel[]> {
    return this.userModel.find().exec();
  }
}
