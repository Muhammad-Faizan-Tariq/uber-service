import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinateService: RiderCoordinatesService) {}
    // private readonly riderCoordinatesService: RiderCoordinatesService) {}
    
    @Get(":id")
    async getRiderCoordinates(
      @Param()
      params: any
    ) {
        return await this.coordinateService.getRiderCoordinates(params.id);
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
