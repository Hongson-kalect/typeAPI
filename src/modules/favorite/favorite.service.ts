import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Favorite,
  FavoriteDocument,
} from 'src/database/schemas/favorite.schema';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectModel(Favorite.name) private userModel: Model<FavoriteDocument>,
  ) {}

  async createFavorite({ age, name }: CreateFavoriteDto): Promise<Favorite> {
    const newFavorite = new this.userModel({ name, age });
    return newFavorite.save();
  }

  async findAll(): Promise<Favorite[]> {
    return this.userModel.find().exec();
  }
}
