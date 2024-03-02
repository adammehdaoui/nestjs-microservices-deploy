import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getHelloFromMicroservice(): import("rxjs").Observable<string>;
}
