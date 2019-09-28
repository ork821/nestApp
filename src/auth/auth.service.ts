import { Injectable } from '@nestjs/common';
import {UserRepository} from './user.repository';
import {InjectRepository} from '@nestjs/typeorm';
import {AuthCredetialsDto} from './dto/auth-credetials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}

    async signUp(authCredentialsDto: AuthCredetialsDto): Promise<void> {
        return this.userRepository.signUp(authCredentialsDto);
    }
}
