import mongoose, { HydratedDocument } from 'mongoose';

export type providerDocument = HydratedDocument<typeof providerSchema>

export const providerSchema = new mongoose.Schema({
  name: String,
  secret: String
});