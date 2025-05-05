import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinates, RiderCoordinatesSchema } from './schemas/rider-coordinates.schema';
import {  ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [MongooseModule.forFeature([{name: RiderCoordinates.name, schema: RiderCoordinatesSchema}]),
  ClientsModule.register([
    {
      name: 'RIDER_SERVICE',
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1', // must match where rider-service is listening
        port: 3000,        // must match rider-service port
      },
    },
  ]),
],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
  exports: [RiderCoordinatesService], // optional: if used in other modules
})
export class RiderCoordinatesModule {}
