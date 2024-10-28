import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateLanguageDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  flag: string;

  @IsString()
  desc: string;
}
