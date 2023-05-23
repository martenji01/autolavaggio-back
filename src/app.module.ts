import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config/dist';
import { MongodbConfigService } from './config/mongodb.config.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongodbConfigService,
    }),
    AuthModule,
    UserModule
  ],
})
export class AppModule {}
