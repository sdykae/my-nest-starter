import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('app-core')
    .setDescription('app-core API description')
    .setVersion('1.0')
    .addTag('app-core-tag')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const configService: ConfigService = app.get(ConfigService);
  SwaggerModule.setup(configService.get<string>('SWAGGER_PATH'), app, document);
  await app.listen(configService.get<string>('APP_PORT'));
}
bootstrap();
