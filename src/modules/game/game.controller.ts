import { Controller, Get, Post, Body } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('favorites')
export class GameController {
  constructor(private readonly userService: GameService) {}

  @Post()
  async createGame(@Body() createGameDto: CreateGameDto) {
    return this.userService.createGame(createGameDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
