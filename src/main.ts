import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Lika Tree Backend')
    .setDescription("This is the complete list of all api's for this project")
    .setVersion('1.0')
    .addTag('LikaTrees')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //security measures
  app.enableCors({
    credentials: true
    // origin: "allow-origin"
  })

  await app.listen(3000);
}
bootstrap();
