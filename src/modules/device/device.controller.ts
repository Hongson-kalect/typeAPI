import { Controller, Get, Post, Body } from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Controller('devices')
export class DeviceController {
  constructor(private readonly userService: DeviceService) {}

  @Post()
  async createDevice(@Body() createDeviceDto: CreateDeviceDto) {
    return this.userService.createDevice(createDeviceDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
