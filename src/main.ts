import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000
  const globalPrefix = 'api'

  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Util')
  .setDescription('The util API description')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  Logger.log(
		`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
	);
}
bootstrap();
