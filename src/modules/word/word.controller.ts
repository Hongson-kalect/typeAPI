import { Controller, Get, Post, Body } from '@nestjs/common';
import { WordService } from './word.service';
import { CreateWordDto } from './dto/create-word.dto';

@Controller('words')
export class WordController {
  constructor(private readonly userService: WordService) {}

  @Post()
  async createWord(@Body() createWordDto: CreateWordDto) {
    return this.userService.createWord(createWordDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
