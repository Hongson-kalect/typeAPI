import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordRate, WordRateSchema } from 'src/database/schemas/wordRate.schema';
import { WordRateController } from './wordRate.controller';
import { WordRateService } from './wordRate.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WordRate.name, schema: WordRateSchema },
    ]),
  ],
  controllers: [WordRateController],
  providers: [WordRateService],
})
export class WordRateModule {}
