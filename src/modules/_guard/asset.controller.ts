import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-user.dto';

@Controller('users')
export class AssetController {
  constructor(private readonly userService: AssetService) {}

  @Post()
  async createAsset(@Body() createAssetDto: CreateAssetDto) {
    return this.userService.createAsset(createAssetDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
