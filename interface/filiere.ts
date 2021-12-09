import { Document } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.
export default interface IFiliere extends Document{
    nom_filiere: string;
    parcours : string;
}