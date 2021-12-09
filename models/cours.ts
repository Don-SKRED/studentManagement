import mongoose, { Schema } from 'mongoose';
import { setTokenSourceMapRange } from 'typescript';
import ICours from '../interface/cours';
import administration from './administration';

// 2. Create a Schema corresponding to the document interface.
const courSchema = new Schema({
    nom_cours: { type: String, required: true },
    heure_cours: { type: String, required: true },
    date_cours: { type: String, required: true },
    id_niveau : { type : String, required: true }

    

});

// 3. Create a Model.
export default mongoose.model<ICours>('Cours', courSchema);
