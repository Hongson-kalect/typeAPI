import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Language,
  LanguageDocument,
} from 'src/database/schemas/language.schema';
import { CreateLanguageDto } from './dto/create-language.dto';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language.name) private userModel: Model<LanguageDocument>,
  ) {}

  async createLanguage({ age, name }: CreateLanguageDto): Promise<Language> {
    const newLanguage = new this.userModel({ name, age });
    return newLanguage.save();
  }

  async findAll(): Promise<Language[]> {
    return this.userModel.find().exec();
  }
}
