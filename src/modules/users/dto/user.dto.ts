import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { IsMatchPattern } from 'src/common/validators/IsMatchPattern.validation';
import { PASSWORD_PATTERN } from 'src/constants/base.constant';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  @IsMatchPattern(PASSWORD_PATTERN, { message: 'Password is invalid' })
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
