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
    @InjectModel(Language.name) private languageModel: Model<LanguageDocument>,
  ) {}

  async createLanguage(props: CreateLanguageDto): Promise<Language> {
    try {
      const language = await this.languageModel
        .findOneAndUpdate(
          {
            code: props.code,
          },
          props,
          {
            new: true,
            upsert: true,
          },
        )
        .exec();
      return language;
    } catch (error) {}
    // const newLanguage = new this.languageModel(props);
    // return newLanguage.save();
  }

  async find(id?: string[] | string): Promise<Language[]> {
    if (id === undefined || id?.length === 0)
      return this.languageModel.find().exec();
    else if (id?.length) {
      return this.languageModel.find({ _id: { $in: id } }).exec();
    } else return this.languageModel.find({ _id: id }).exec();
  }
}
