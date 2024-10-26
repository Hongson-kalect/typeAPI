import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SpecialRule,
  SpecialRuleDocument,
} from 'src/database/schemas/specialRule.schema.ts';
import { CreateSpecialRuleDto } from './dto/create-specialRule.dto';

@Injectable()
export class SpecialRuleService {
  constructor(
    @InjectModel(SpecialRule.name)
    private userModel: Model<SpecialRuleDocument>,
  ) {}

  async createSpecialRule({
    age,
    name,
  }: CreateSpecialRuleDto): Promise<SpecialRule> {
    const newSpecialRule = new this.userModel({ name, age });
    return newSpecialRule.save();
  }

  async findAll(): Promise<SpecialRule[]> {
    return this.userModel.find().exec();
  }
}
