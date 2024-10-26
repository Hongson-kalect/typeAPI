import { Controller, Get, Post, Body } from '@nestjs/common';
import { BanService } from './ban.service';

@Controller('bans')
export class BanController {
  constructor(private readonly userService: BanService) {}

  @Post()
  async createBan(@Body() createBanDto) {
    return this.userService.createBan(createBanDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
