import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from 'src/database/schemas/novel.schema';
import { CreateNovelDto } from './dto/create-novel.dto';
import { ParagraphService } from '../paragraphs/paragraph.service';
import { AddParagraphDto } from './dto/add-paragraph.dto';

@Injectable()
export class NovelService {
  constructor(
    @InjectModel(Novel.name) private novelModel: Model<NovelDocument>,
    private readonly paragraphsService: ParagraphService,
  ) {}

  async createNovel(props: CreateNovelDto): Promise<Novel> {
    const paragraph = await this.paragraphsService.createParagraph({
      content: props.content,
      desc: props.desc,
      language: props.language,
      header: props.header,
    });

    const newNovel = new this.novelModel({ ...props, paragraph: [paragraph] });
    return newNovel.save();
  }

  async addParagraph(props: AddParagraphDto): Promise<Novel> {
    const novel = await this.novelModel.findById(props.id);
    if (!novel)
      throw new HttpException('novel not found', HttpStatus.NOT_FOUND);

    const paragraph = await this.paragraphsService.createParagraph({
      content: props.content,
      desc: props.desc,
      language: props.language,
      header: props.header,
    });

    novel.paragraphs.push(paragraph._id);
    return novel.save();
  }

  async findAll(options: object): Promise<Novel[]> {
    return this.novelModel.find(options).exec();
  }
  async findOne(id: string): Promise<Novel> {
    const novel = this.novelModel.findOne({ _id: id }).exec();
    if (novel) throw new HttpException('novel not found', HttpStatus.NOT_FOUND);
    return novel;
  }
}
