import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Word, WordDocument } from 'src/database/schemas/word.schema';
import { CreateWordDto } from './dto/create-word.dto';

@Injectable()
export class WordService {
  constructor(@InjectModel(Word.name) private userModel: Model<WordDocument>) {}

  async createWord({ age, name }: CreateWordDto): Promise<Word> {
    const newWord = new this.userModel({ name, age });
    return newWord.save();
  }

  async findAll(): Promise<Word[]> {
    return this.userModel.find().exec();
  }
}
