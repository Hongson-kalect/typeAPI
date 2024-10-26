import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Theme, ThemeDocument } from 'src/database/schemas/theme.schema';
import { CreateThemeDto } from './dto/create-theme.dto';

@Injectable()
export class ThemeService {
  constructor(
    @InjectModel(Theme.name) private userModel: Model<ThemeDocument>,
  ) {}

  async createTheme({ age, name }: CreateThemeDto): Promise<Theme> {
    const newTheme = new this.userModel({ name, age });
    return newTheme.save();
  }

  async findAll(): Promise<Theme[]> {
    return this.userModel.find().exec();
  }
}
