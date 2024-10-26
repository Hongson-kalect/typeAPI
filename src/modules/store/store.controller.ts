import { Controller, Get, Post, Body } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';

@Controller('stores')
export class StoreController {
  constructor(private readonly userService: StoreService) {}

  @Post()
  async createStore(@Body() createStoreDto: CreateStoreDto) {
    return this.userService.createStore(createStoreDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
