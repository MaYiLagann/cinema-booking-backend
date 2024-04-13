import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class AuthenticationModule {
  static registerAsync(): DynamicModule {
    return JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('user.jwt_secret'),
      }),
      inject: [ConfigService],
    });
  }
}
