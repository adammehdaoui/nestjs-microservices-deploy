import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  if (!process.env.PORT) {
    throw new Error('PORT not defined');
  }

  const port = parseInt(process.env.PORT);

  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
