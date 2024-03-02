import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class AppService {
    private readonly helloWorldClient;
    constructor(helloWorldClient: ClientProxy);
    getHello(): string;
    getHelloFromMicroservice(): Observable<string>;
}
