import mongoose, { Schema } from 'mongoose';
import IPresence from '../interface/presence';

// 2. Create a Schema corresponding to the document interface.
const presenceSchema = new Schema({
  confirme: { type: Boolean, required: true },
  id_administration: { type: String, required: true },
  id_etudiant: { type: String, required: true },



});

// 3. Create a Model.
export default mongoose.model<IPresence>('Presence', presenceSchema);