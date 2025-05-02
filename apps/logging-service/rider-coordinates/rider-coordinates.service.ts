import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinates.name)
        private readonly riderCoordinatesModel: Model<RiderCoordinates>,    
    ) {}

    async saveRiderCoordinates(CreateCoordinatesDto: CreateCoordinatesDto) {
        return await this.riderCoordinatesModel.create(CreateCoordinatesDto);
    }
}
