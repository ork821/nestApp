import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {InjectRepository} from '@nestjs/typeorm';
import {AuthCredetialsDto} from './dto/auth-credetials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {
    }

    async signUp(authCredentialsDto: AuthCredetialsDto): Promise<void> {
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredetialsDto): Promise<void> {
        const username = await this.userRepository.validateUserPassword(authCredentialsDto);
        if (!username) {
            throw new UnauthorizedException('Invalid credentials');
        }
    }
}
