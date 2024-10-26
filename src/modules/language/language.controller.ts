import { Controller, Get, Post, Body } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';

@Controller('languages')
export class LanguageController {
  constructor(private readonly userService: LanguageService) {}

  @Post()
  async createLanguage(@Body() createLanguageDto: CreateLanguageDto) {
    return this.userService.createLanguage(createLanguageDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
