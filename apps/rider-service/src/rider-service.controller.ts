import { Controller, Get, Param } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { first } from 'rxjs';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  // @Get(':id')
  @MessagePattern({cmd: 'get-rider'})
  async getRiderById(
  data: any
  ) {
    return Promise.resolve(
      {
        _id: data.id,
        firstName: 'John',
        lastName: 'Doe',
        email:  'johnedoe@mail.com'
       }
    )
  }
}
