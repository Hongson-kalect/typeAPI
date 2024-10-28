import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Novel, NovelSchema } from 'src/database/schemas/novel.schema';
import { NovelController } from './novel.controller';
import { NovelService } from './novel.service';
import { ParagraphModule } from '../paragraphs/paragraph.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Novel.name, schema: NovelSchema }]),
    ParagraphModule,
  ],
  controllers: [NovelController],
  providers: [NovelService],
})
export class NovelModule {}
