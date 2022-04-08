import { Controller, Get } from '@nestjs/common';
import { MsgService } from './msg.service';

@Controller('msg')
export class MsgController {
  constructor(private msgService: MsgService) {}

  @Get()
  findAll() {
    return this.msgService.findAll();
  }
}
