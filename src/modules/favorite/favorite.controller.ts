import { Controller, Get, Post, Body } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Controller('favorites')
export class FavoriteController {
  constructor(private readonly userService: FavoriteService) {}

  @Post()
  async createFavorite(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.userService.createFavorite(createFavoriteDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
