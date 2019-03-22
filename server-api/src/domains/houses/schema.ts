import * as mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
  id: String,
  piecesNumber: Number,
  area: Number,
  ownerId: String,
});

export default HouseSchema;
