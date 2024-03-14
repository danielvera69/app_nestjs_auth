import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// El archivo de entrada de la aplicación que utiliza la función principal NestFactory para crear una instancia de aplicación Nest.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
