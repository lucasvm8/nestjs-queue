import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MsgController } from './msg/msg.controller';
import { MsgService } from './msg/msg.service';

// - Decorator
@Module({
  imports: [MessagesModule],
  controllers: [AppController, MsgController],
  providers: [AppService, MsgService],
})
export class AppModule {}
