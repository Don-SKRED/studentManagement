import { Document } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.
export default interface Icours extends Document{
    nom_cours: string;
    heure_cours: string;
    date_cours: Date;
    id_niveau: string;
}