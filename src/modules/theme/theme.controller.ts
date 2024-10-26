import { Controller, Get, Post, Body } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { CreateThemeDto } from './dto/create-theme.dto';

@Controller('themes')
export class ThemeController {
  constructor(private readonly userService: ThemeService) {}

  @Post()
  async createTheme(@Body() createThemeDto: CreateThemeDto) {
    return this.userService.createTheme(createThemeDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
