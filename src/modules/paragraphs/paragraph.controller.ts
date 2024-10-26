import { Controller, Get, Post, Body } from '@nestjs/common';
import { ParagraphService } from './paragraph.service';
import { CreateParagraphDto } from './dto/create-paragraph.dto';

@Controller('paragraphs')
export class ParagraphController {
  constructor(private readonly userService: ParagraphService) {}

  @Post()
  async createParagraph(@Body() createParagraphDto: CreateParagraphDto) {
    return this.userService.createParagraph(createParagraphDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
