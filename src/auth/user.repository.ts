import {EntityRepository, Repository} from 'typeorm';
import {User} from './user.entity';
import {AuthCredetialsDto} from './dto/auth-credetials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialsDto: AuthCredetialsDto): Promise<void> {
        const {username, password} = authCredentialsDto;
        const user = new User();
        user.username = username;
        user.password = password;
        await user.save();
    }
}
