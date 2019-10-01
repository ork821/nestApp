import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {InjectRepository} from '@nestjs/typeorm';
import {AuthCredetialsDto} from './dto/auth-credetials.dto';
import {JwtService} from '@nestjs/jwt';
import {JwtPayload} from './jwt-payload.inteface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) {
    }

    async signUp(authCredentialsDto: AuthCredetialsDto): Promise<void> {
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredetialsDto): Promise<{ accessToken: string }> {
        const username = await this.userRepository.validateUserPassword(authCredentialsDto);
        if (!username) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload: JwtPayload = {username};
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }
}
