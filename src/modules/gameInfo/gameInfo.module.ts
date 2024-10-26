import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameInfo, GameInfoSchema } from 'src/database/schemas/gameinfo.schema';
import { GameInfoController } from './gameInfo.controller';
import { GameInfoService } from './gameInfo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GameInfo.name, schema: GameInfoSchema },
    ]),
  ],
  controllers: [GameInfoController],
  providers: [GameInfoService],
})
export class GameInfoModule {}
