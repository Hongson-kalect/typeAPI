import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(120)
  age: number;
}