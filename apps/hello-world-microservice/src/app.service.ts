import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from first microservice (yes its really, a microservice on EC2 instance)!';
  }
}
