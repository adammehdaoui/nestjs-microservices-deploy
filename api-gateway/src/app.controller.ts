import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(@Inject('HELLO') private readonly helloClient: ClientProxy) {}

  @Get()
  getHello() {
    const resHello = this.helloClient.send({ cmd: 'hi' }, {});
    return resHello.pipe(
      map((response) => {
        return 'Processed response: ' + response;
      }),
    );
  }
}
