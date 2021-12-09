import mongoose, { Schema } from 'mongoose';
import IAdministration from '../interface/administration';

// 2. Create a Schema corresponding to the document interface.
const adminSchema = new Schema({
  nom_admin: { type: String, required: true },
  prenom_admin: { type: String, required: true },
  matricule_admin: { type: String, required: true },
  date_naissance: { type: Date, required: true },


});

// 3. Create a Model.
export default mongoose.model<IAdministration>('administration', adminSchema);