import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { SocialmediaModule } from './socialmedia/socialmedia.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule,AuthModule, UserModule, SocialmediaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
