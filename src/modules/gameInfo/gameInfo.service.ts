import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  GameInfo,
  GameInfoDocument,
} from 'src/database/schemas/gameinfo.schema';
import { CreateGameInfoDto } from './dto/create-gameInfo.dto';

@Injectable()
export class GameInfoService {
  constructor(
    @InjectModel(GameInfo.name) private userModel: Model<GameInfoDocument>,
  ) {}

  async createGameInfo({ age, name }: CreateGameInfoDto): Promise<GameInfo> {
    const newGameInfo = new this.userModel({ name, age });
    return newGameInfo.save();
  }

  async findAll(): Promise<GameInfo[]> {
    return this.userModel.find().exec();
  }
}
