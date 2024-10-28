import {
  IsString,
  IsInt,
  Min,
  Max,
  IsArray,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateNovelDto {
  @IsString()
  defaultLanguage: string;

  @IsString()
  language: string;

  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(120)
  age: number;

  @IsString()
  level: string;

  @IsString()
  rate: string;

  @IsString()
  rateTime: string;

  @IsString()
  chapter: string;

  @IsString()
  price: string;

  @IsString()
  prev: string;

  @IsString()
  next: string;

  @IsString()
  tag: string;

  @IsString()
  desc: string;

  @IsString()
  seri: string;

  @IsString()
  header: string;

  @IsString()
  content: string;

  // @IsArray()
  // @IsString({ each: true })
  // paragraphs: string[];
}
