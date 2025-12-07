import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix('api/v1'); // All routes will be prefixed with /api/v1/products/id
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignore les propriétés non définies dans les DTO
      forbidNonWhitelisted: true, // Lève une erreur si des propriétés non définies sont présentes
      transform: true, // transforme le JSON en classe DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
