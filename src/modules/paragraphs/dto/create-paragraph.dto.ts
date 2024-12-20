import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateParagraphDto {
  @IsString()
  language: string;

  @IsString()
  header: string;

  @IsString()
  content: string;

  @IsString()
  desc: string;
}
