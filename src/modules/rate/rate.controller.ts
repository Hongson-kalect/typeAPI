import { Controller, Get, Post, Body } from '@nestjs/common';
import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';

@Controller('rates')
export class RateController {
  constructor(private readonly userService: RateService) {}

  @Post()
  async createRate(@Body() createRateDto: CreateRateDto) {
    return this.userService.createRate(createRateDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
