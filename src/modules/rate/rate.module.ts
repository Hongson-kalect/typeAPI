import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Rate, RateSchema } from 'src/database/schemas/rate.schema';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rate.name, schema: RateSchema }]),
  ],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}
