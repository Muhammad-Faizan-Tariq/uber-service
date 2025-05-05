import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinates.name)
        private readonly riderCoordinatesModel: Model<RiderCoordinates>,
        @Inject('RIDER_SERVICE') private readonly client: ClientProxy,   
    ) {}

    async getRiderCoordinates(riderId: string) {
        const coordinates = await this.riderCoordinatesModel.findOne({ riderId }).exec();
        const pattern = {cmd: 'get-rider'}
        const payload = { id: riderId };
        const rider = await firstValueFrom(this.client.send(pattern, payload))
        return {coordinates, rider}
    }
    
    async saveRiderCoordinates(CreateCoordinatesDto: CreateCoordinatesDto) {
        return await this.riderCoordinatesModel.create(CreateCoordinatesDto);
    }
}
