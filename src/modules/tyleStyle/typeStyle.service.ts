import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  TypeStyle,
  TypeStyleDocument,
} from 'src/database/schemas/typeStyle.schema';
import { CreateTypeStyleDto } from './dto/create-typeStyle.dto';

@Injectable()
export class TypeStyleService {
  constructor(
    @InjectModel(TypeStyle.name) private userModel: Model<TypeStyleDocument>,
  ) {}

  async createTypeStyle({ age, name }: CreateTypeStyleDto): Promise<TypeStyle> {
    const newTypeStyle = new this.userModel({ name, age });
    return newTypeStyle.save();
  }

  async findAll(): Promise<TypeStyle[]> {
    return this.userModel.find().exec();
  }
}
