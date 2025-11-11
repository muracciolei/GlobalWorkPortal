import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { PayrollModule } from './payroll/payroll.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST') || 'db',
        port: configService.get('DB_PORT') || 5432,
        username: configService.get('DB_USER') || 'globalwork',
        password: configService.get('DB_PASSWORD') || 'globalwork123',
        database: configService.get('DB_NAME') || 'globalwork_db',
        entities: ['src/**/*.entity.ts'],
        synchronize: true,
        logging: false,
      }),
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET') || 'secret-key',
        signOptions: { expiresIn: configService.get('JWT_EXPIRATION') || '7d' },
      }),
    }),
    PassportModule,
    AuthModule,
    EmployeeModule,
    PayrollModule,
    CountryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
