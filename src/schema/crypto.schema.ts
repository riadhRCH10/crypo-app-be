import { Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type cryptoDocument = HydratedDocument<cryptoSchema>
 
@Schema({ timestamps: true })
export class cryptoSchema {
  name: String
  rates: Array<rate>
  provider: String
} 

interface rate {
    name: String;
    rate: Number
}

export const CryptoSchema = SchemaFactory.createForClass(cryptoSchema);