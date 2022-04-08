import { Injectable } from '@nestjs/common';

@Injectable()
export class MsgService {
  private messages = [
    {
      id: 1,
      text: 'mensagem um',
    },
    {
      id: 2,
      text: 'mensagem dois',
    },
  ];

  public findAll() {
    return this.messages;
  }
}
