import { Controller, Get, Post, Body } from '@nestjs/common';
import { WordRateService } from './wordRate.service';
import { CreateWordRateDto } from './dto/create-wordRate.dto';

@Controller('word-rates')
export class WordRateController {
  constructor(private readonly userService: WordRateService) {}

  @Post()
  async createWordRate(@Body() createWordRateDto: CreateWordRateDto) {
    return this.userService.createWordRate(createWordRateDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
