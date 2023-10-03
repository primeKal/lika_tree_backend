import { Module } from '@nestjs/common';
import { socialmediaProvider } from './socialmedia.providers';
import { SocialmediaService } from './socialmedia.service';
import { SocialmediaController } from './socialmedia.controller';

@Module({
  providers: [...socialmediaProvider, SocialmediaService],
  controllers: [SocialmediaController]
})
export class SocialmediaModule {}
