import mongoose, { Schema } from 'mongoose';
import INiveau from '../interface/niveau';

// 2. Create a Schema corresponding to the document interface.
const niveauSchema = new Schema({
  niveau_etude: { type: String, required: true },


});

// export model
export default mongoose.model<INiveau>('Niveau', niveauSchema);