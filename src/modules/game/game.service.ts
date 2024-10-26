import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from 'src/database/schemas/game.schema';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private userModel: Model<GameDocument>) {}

  async createGame({ age, name }: CreateGameDto): Promise<Game> {
    const newGame = new this.userModel({ name, age });
    return newGame.save();
  }

  async findAll(): Promise<Game[]> {
    return this.userModel.find().exec();
  }
}
