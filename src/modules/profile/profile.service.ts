import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from 'src/database/schemas/profile.schema';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name) private userModel: Model<ProfileDocument>,
  ) {}

  async createProfile({ age, name }: CreateProfileDto): Promise<Profile> {
    const newProfile = new this.userModel({ name, age });
    return newProfile.save();
  }

  async findAll(): Promise<Profile[]> {
    return this.userModel.find().exec();
  }
}
