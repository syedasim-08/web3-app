import mongoose, { Document, Schema } from 'mongoose';

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
}, {
  timestamps: true // This will automatically add `createdAt` and `updatedAt` fields
});

interface IContact extends Document {
  name: string;
  email?: string;
  phone?: string;
}

const ContactModel = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default ContactModel;


