import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserTypeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  type: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  alias: string;
}
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString({ each: true })
  @ApiProperty()
  jobs: string[];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserTypeDto)
  @ApiProperty({ type: [UserTypeDto] })
  type: UserTypeDto[];
}
