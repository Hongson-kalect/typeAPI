import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingService } from './setting.service';
import { CreateSettingDto } from './dto/create-setting.dto';

@Controller('settings')
export class SettingController {
  constructor(private readonly userService: SettingService) {}

  @Post()
  async createSetting(@Body() createSettingDto: CreateSettingDto) {
    return this.userService.createSetting(createSettingDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
