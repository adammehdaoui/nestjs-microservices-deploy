import { ClientProxy } from '@nestjs/microservices';
export declare class AppController {
    private readonly helloClient;
    constructor(helloClient: ClientProxy);
    getHello(): import("rxjs").Observable<string>;
}
