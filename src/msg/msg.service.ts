import { Injectable } from '@nestjs/common';
import { Msg } from './msg.interface';

@Injectable()
export class MsgService {
  private messages: Msg[] = [
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

  create(message: Msg) {
    return this.messages.push(message);
  }

  delete(id: number) {
    const index = this.messages.findIndex((m) => m.id === id);
    delete this.messages[index];

    return true;
  }
  update(id: number) {
    return id;
  }
}
