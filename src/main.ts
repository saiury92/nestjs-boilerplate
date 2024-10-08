import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from './config/config.type';
import { configSwagger } from './config/api-docs.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configSwagger(app);
  const configService = app.get(ConfigService<AllConfigType>);

  await app.listen(configService.getOrThrow('app.port', { infer: true }));
}
bootstrap();
