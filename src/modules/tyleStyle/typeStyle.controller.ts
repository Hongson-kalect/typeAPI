import { Controller, Get, Post, Body } from '@nestjs/common';
import { TypeStyleService } from './typeStyle.service';
import { CreateTypeStyleDto } from './dto/create-typeStyle.dto';

@Controller('type-styles')
export class TypeStyleController {
  constructor(private readonly userService: TypeStyleService) {}

  @Post()
  async createTypeStyle(@Body() createTypeStyleDto: CreateTypeStyleDto) {
    return this.userService.createTypeStyle(createTypeStyleDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
