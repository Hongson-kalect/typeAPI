import { Controller, Get, Post, Body } from '@nestjs/common';
import { NovelService } from './novel.service';
import { CreateNovelDto } from './dto/create-novel.dto';

@Controller('novels')
export class NovelController {
  constructor(private readonly userService: NovelService) {}

  @Post()
  async createNovel(@Body() createNovelDto: CreateNovelDto) {
    return this.userService.createNovel(createNovelDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
