import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly userService: ProfileService) {}

  @Post()
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    return this.userService.createProfile(createProfileDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
