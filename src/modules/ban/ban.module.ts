import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ban, BanSchema } from 'src/database/schemas/ban.schema';
import { BanController } from './ban.controller';
import { BanService } from './ban.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ban.name, schema: BanSchema }])],
  controllers: [BanController],
  providers: [BanService],
})
export class BanModule {}
