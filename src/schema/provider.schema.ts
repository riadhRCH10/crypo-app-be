import { Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type providerDocument = HydratedDocument<providerSchema>
 
@Schema({ timestamps: true })
export class providerSchema {
  name: String
  secret: String
} 

export const ProviderSchema = SchemaFactory.createForClass(providerSchema);