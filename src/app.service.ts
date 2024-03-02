import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(
    @Inject('HELLO') private readonly helloWorldClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getHelloFromMicroservice(): Observable<string> {
    return this.helloWorldClient.send({ cmd: 'hi' }, {}).pipe(
      map((response) => {
        return 'Réponse traitée : ' + response;
      }),
    );
  }
}
