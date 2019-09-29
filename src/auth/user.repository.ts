import {EntityRepository, Repository} from 'typeorm';
import {User} from './user.entity';
import {AuthCredetialsDto} from './dto/auth-credetials.dto';
import {ConflictException, InternalServerErrorException} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialsDto: AuthCredetialsDto): Promise<void> {
        const {username, password} = authCredentialsDto;
        const user = new User();
        user.username = username;
        user.password = password;
        try {
            await user.save();
        } catch (e) {
            if (e.code === '23505') { // duplicate username
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException('Server Error');
            }
        }

    }
}
