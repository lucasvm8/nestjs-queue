import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Message } from './Message';
import { MsgService } from './msg.service';

@Controller('msg')
export class MsgController {
  constructor(private msgService: MsgService) {}

  @Post()
  create(@Body() body: Message) {
    console.log(body);
    return this.msgService.create(body);
  }

  @Get()
  findAll() {
    return this.msgService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    console.log(typeof params.id);
    return this.msgService.findById(+params.id);
  }
}
