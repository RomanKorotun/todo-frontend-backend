import { IsNotEmpty, IsString } from 'class-validator';

export class TaskRequestDto {
  @IsNotEmpty()
  @IsString()
  text: string;
}
