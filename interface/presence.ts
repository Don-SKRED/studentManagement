import { Document } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.
export default interface IPresence extends Document{
   confirme : boolean;
   id_administration : string;
   id_etudiant: string;
}