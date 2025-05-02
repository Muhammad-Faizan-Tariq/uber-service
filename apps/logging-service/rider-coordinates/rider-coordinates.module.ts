import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinates, RiderCoordinatesSchema } from './schemas/rider-coordinates.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: RiderCoordinates.name, schema: RiderCoordinatesSchema}])],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
  exports: [RiderCoordinatesService], // optional: if used in other modules
})
export class RiderCoordinatesModule {}
