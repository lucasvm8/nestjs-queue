import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MsgService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'mensagem um',
    },
    {
      id: 2,
      text: 'mensagem dois',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((m) => m.id === id);
  }

  create(message: Message) {
    return this.messages.push(message);
  }

  delete(id: number) {
    const index = this.messages.findIndex((m) => m.id === id);
    delete this.messages[index];

    return true;
  }
}
