import { Controller, Get, Post, Body } from '@nestjs/common';
import { GameInfoService } from './gameInfo.service';
import { CreateGameInfoDto } from './dto/create-gameInfo.dto';

@Controller('game-infos')
export class GameInfoController {
  constructor(private readonly userService: GameInfoService) {}

  @Post()
  async createGameInfo(@Body() createGameInfoDto: CreateGameInfoDto) {
    return this.userService.createGameInfo(createGameInfoDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
