import { Controller, Get, Post, Body } from '@nestjs/common';
import { SpecialRuleService } from './specialRule.service';
import { CreateSpecialRuleDto } from './dto/create-specialRule.dto';

@Controller('special-rules')
export class SpecialRuleController {
  constructor(private readonly userService: SpecialRuleService) {}

  @Post()
  async createSpecialRule(@Body() createSpecialRuleDto: CreateSpecialRuleDto) {
    return this.userService.createSpecialRule(createSpecialRuleDto);
  }

  @Get()
  async findAll() {
    return JSON.stringify([{ name: 'ádfasdf' }]);
    // return this.userService.findAll();
  }
}
