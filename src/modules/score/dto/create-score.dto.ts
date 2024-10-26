import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateScoreDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(120)
  age: number;
}
