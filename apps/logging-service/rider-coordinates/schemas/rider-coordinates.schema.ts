import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinates>;

@Schema()
export class RiderCoordinates {
    @Prop({ required: true })
    riderId: string;
    
    @Prop({ required: true })
    latitude: number;
    
    @Prop({ required: true })
    longitude: number;
    
    timestamp: Date;
}

export const RiderCoordinatesSchema = SchemaFactory.createForClass(RiderCoordinates);