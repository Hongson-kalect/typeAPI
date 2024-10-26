import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device, DeviceDocument } from 'src/database/schemas/device.schema';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device.name) private userModel: Model<DeviceDocument>,
  ) {}

  async createDevice({ age, name }: CreateDeviceDto): Promise<Device> {
    const newDevice = new this.userModel({ name, age });
    return newDevice.save();
  }

  async findAll(): Promise<Device[]> {
    return this.userModel.find().exec();
  }
}
