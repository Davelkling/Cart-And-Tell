import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [UserModule, PassportModule,JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: "7d"}
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy,PrismaService],
  controllers: [AuthController]
})
export class AuthModule {}
