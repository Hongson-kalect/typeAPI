import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Asset, AssetDocument } from 'src/database/schemas/asset.schema';
import { CreateAssetDto } from './dto/create-user.dto';

@Injectable()
export class AssetService {
  constructor(
    @InjectModel(Asset.name) private userModel: Model<AssetDocument>,
  ) {}

  async createAsset({ age, name }: CreateAssetDto): Promise<Asset> {
    const newAsset = new this.userModel({ name, age });
    return newAsset.save();
  }

  async findAll(): Promise<Asset[]> {
    return this.userModel.find().exec();
  }
}
