import mongoose, { Schema } from 'mongoose';
import IEtudiant from '../interface/etudiant';

// 2. Create a Schema corresponding to the document interface.
const etudiantSchema = new Schema({

  nom_etudiant: { type: String, required: true },
  prenom_etudiant: { type: String, required: true },
  num_etudiant: { type: Number, required: true },
  num_matricule: { type: String, required: true },
  annee_scolaire: { type: String, required: true },
  id_filiere: { type: String, required: true },
  id_niveau: { type: String, required: true }
    
});

// 3. Create a Model.
export default mongoose.model<IEtudiant>('Etudiant', etudiantSchema);

