import mongoose, { Document, Schema } from 'mongoose';

const ArtsSchema: Schema = new Schema({
  name: { type: String, required: true },
  minting: { type: String },
  price: { type: String },
  imgUrl: { type: String },
  description: { type: String },
  link: { type: String },
  createdAt: { type: Date, default: Date.now }

},
{
  timestamps: true 
}
);

interface IArts extends Document {
    name: String,
    minting: String,
    price: String,
    imgUrl: String
    
}

const ArtModel = mongoose.models.Art || mongoose.model<IArts>('Art', ArtsSchema);

export default ArtModel;


