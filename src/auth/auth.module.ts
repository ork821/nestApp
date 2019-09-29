import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserRepository} from './user.repository';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: 'OrkSecret',
            signOptions: {
                expiresIn: 60 * 60 * 5, // 5 hours
            },
        }),
        TypeOrmModule.forFeature([UserRepository]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {
}
