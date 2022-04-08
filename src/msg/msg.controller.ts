import { Controller, Get } from '@nestjs/common';

@Controller('msg')
export class MsgController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        text: 'mensagem um',
      },
      {
        id: 2,
        text: 'mensagem dois',
      },
    ];
  }
}
