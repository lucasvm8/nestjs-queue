import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MsgController } from './msg/msg.controller';

// - Decorator
@Module({
  imports: [MessagesModule],
  controllers: [AppController, MsgController],
  providers: [AppService],
})
export class AppModule {}
