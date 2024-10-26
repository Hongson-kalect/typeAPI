import { Controller, Get, Post, Body } from '@nestjs/common';
import { RankService } from './rank.service';
import { CreateRankDto } from './dto/create-rank.dto';

@Controller('ranks')
export class RankController {
  constructor(private readonly userService: RankService) {}

  @Post()
  async createRank(@Body() createRankDto: CreateRankDto) {
    return this.userService.createRank(createRankDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
