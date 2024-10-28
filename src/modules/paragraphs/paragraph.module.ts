import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Paragraph,
  ParagraphSchema,
} from 'src/database/schemas/paragraphs.schema';
import { ParagraphController } from './paragraph.controller';
import { ParagraphService } from './paragraph.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Paragraph.name, schema: ParagraphSchema },
    ]),
  ],
  controllers: [ParagraphController],
  providers: [ParagraphService],
  exports: [ParagraphService],
})
export class ParagraphModule {}
