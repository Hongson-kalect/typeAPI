import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting, SettingDocument } from 'src/database/schemas/setting.schema';
import { CreateSettingDto } from './dto/create-setting.dto';

@Injectable()
export class SettingService {
  constructor(
    @InjectModel(Setting.name) private userModel: Model<SettingDocument>,
  ) {}

  async createSetting({ age, name }: CreateSettingDto): Promise<Setting> {
    const newSetting = new this.userModel({ name, age });
    return newSetting.save();
  }

  async findAll(): Promise<Setting[]> {
    return this.userModel.find().exec();
  }
}
