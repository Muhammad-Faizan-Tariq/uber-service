import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinateService: RiderCoordinatesService) {}
    // private readonly riderCoordinatesService: RiderCoordinatesService) {}
    @Get()
    getRiderCoordinates() {
        return 'Hello! Iam from Rider coordinates data';
    }


    @Post()
    async saveRiderCoordinates(
      @Body()
      createRiderCoordinateDto: CreateCoordinatesDto,
    ) {
      return await this.coordinateService.saveRiderCoordinates(
        createRiderCoordinateDto);
    }
}
