import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Score, ScoreSchema } from 'src/database/schemas/score.schema';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Score.name, schema: ScoreSchema }]),
  ],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}
