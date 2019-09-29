import {IsString, Matches, MaxLength, MinLength} from 'class-validator';

export class AuthCredetialsDto {
    @IsString()
    @MinLength(5)
    @MaxLength(25)
    username: string;

    @IsString()
    @MinLength(6)
    @MaxLength(25)
    password: string;
}
