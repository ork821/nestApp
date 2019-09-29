import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {AuthCredetialsDto} from './dto/auth-credetials.dto';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredetialsDto): Promise<void> {
        return this.authService.signUp(authCredentialsDto);
    }
}
