import mongoose, { HydratedDocument } from 'mongoose';

export type cryptoDocument = HydratedDocument<typeof cryptoSchema>

export const cryptoSchema = new mongoose.Schema({
  name: String,
  rates: [{ currency: String, value: Number }],
  provider: String,
});
