import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { NovelService } from './novel.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { AddParagraphDto } from './dto/add-paragraph.dto';

@Controller('novels')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Post()
  async createNovel(@Body() createNovelDto: CreateNovelDto) {
    return this.novelService.createNovel(createNovelDto);
  }

  @Post()
  async addParagraph(@Body() addParagraphDto: AddParagraphDto) {
    return this.novelService.addParagraph(addParagraphDto);
  }

  @Get()
  async find(@Query() options?: object) {
    // return JSON.stringify([{ name: 'ádfasdf' }]);
    return this.novelService.findAll(options);
  }

  @Get()
  async findOne(@Param() id: string) {
    // return JSON.stringify([{ name: 'ádfasdf' }]);
    return this.novelService.findOne(id);
  }
}
