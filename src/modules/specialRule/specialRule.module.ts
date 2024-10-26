import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SpecialRule,
  SpecialRuleSchema,
} from 'src/database/schemas/specialRule.schema.ts';
import { SpecialRuleController } from './specialRule.controller';
import { SpecialRuleService } from './specialRule.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SpecialRule.name, schema: SpecialRuleSchema },
    ]),
  ],
  controllers: [SpecialRuleController],
  providers: [SpecialRuleService],
})
export class SpecialRuleModule {}
