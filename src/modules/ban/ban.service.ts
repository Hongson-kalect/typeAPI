import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ban, BanDocument } from 'src/database/schemas/ban.schema';
import { CreateBanDto } from './dto/create-ban.dto';

@Injectable()
export class BanService {
  constructor(@InjectModel(Ban.name) private userModel: Model<BanDocument>) {}

  async createBan({ age, name }: CreateBanDto): Promise<Ban> {
    const newBan = new this.userModel({ name, age });
    return newBan.save();
  }

  async findAll(): Promise<Ban[]> {
    return this.userModel.find().exec();
  }
}
