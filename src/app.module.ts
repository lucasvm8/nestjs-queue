import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MsgModule } from './msg/msg.module';

// - Decorator
@Module({
  imports: [MsgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
