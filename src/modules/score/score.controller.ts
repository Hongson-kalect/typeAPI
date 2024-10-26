import { Controller, Get, Post, Body } from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';

@Controller('scores')
export class ScoreController {
  constructor(private readonly userService: ScoreService) {}

  @Post()
  async createScore(@Body() createScoreDto: CreateScoreDto) {
    return this.userService.createScore(createScoreDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
