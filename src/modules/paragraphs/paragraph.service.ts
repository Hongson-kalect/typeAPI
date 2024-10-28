import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Paragraph,
  ParagraphDocument,
} from 'src/database/schemas/paragraphs.schema';
import { CreateParagraphDto } from './dto/create-paragraph.dto';

@Injectable()
export class ParagraphService {
  constructor(
    @InjectModel(Paragraph.name) private userModel: Model<ParagraphDocument>,
  ) {}

  async createParagraph(props: CreateParagraphDto): Promise<Paragraph> {
    const createdParagraph = new this.userModel(props);
    return createdParagraph.save();
  }

  async findAll(): Promise<Paragraph[]> {
    return this.userModel.find().exec();
  }
}
