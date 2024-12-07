import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateUserSettingsDto } from './create.user.dto';
import { Type } from 'class-transformer';

export class ResponseUserDto {
  @IsString()
  _id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsOptional()
  @Type(() => CreateUserSettingsDto)
  settings?: CreateUserSettingsDto;
}

export class ResponseUserSettings extends CreateUserSettingsDto {
  @IsString()
  _id: string;
}
