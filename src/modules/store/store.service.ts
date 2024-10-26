import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store, StoreDocument } from 'src/database/schemas/store.schema';
import { CreateStoreDto } from './dto/create-store.dto';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store.name) private userModel: Model<StoreDocument>,
  ) {}

  async createStore({ age, name }: CreateStoreDto): Promise<Store> {
    const newStore = new this.userModel({ name, age });
    return newStore.save();
  }

  async findAll(): Promise<Store[]> {
    return this.userModel.find().exec();
  }
}
