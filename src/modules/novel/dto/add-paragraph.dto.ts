import { IsString } from 'class-validator';

export class AddParagraphDto {
  @IsString()
  id: string;

  @IsString()
  language: string;

  @IsString()
  header: string;

  @IsString()
  content: string;

  @IsString()
  desc: string;
}
