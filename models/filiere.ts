import mongoose, { Schema } from 'mongoose';
import IFiliere from '../interface/filiere';

// 2. Create a Schema corresponding to the document interface.
const filiereSchema = new Schema({
  nom_filiere: { type: String, required: true },
  parcours: { type: String, required: true },

});

// 3. Create a Model.
export default mongoose.model<IFiliere>('filiere', filiereSchema);

