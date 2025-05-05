import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const PORT = 3000;

  try {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      RiderServiceModule,
      {
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: PORT,
        },
      },
    );

    await app.listen();
    console.log(`✅ Rider microservice is up and listening on TCP port ${PORT}`);
  } catch (err) {
    console.error('❌ Failed to start microservice:', err);
  }
}

bootstrap();