import { Document } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.
export default interface IAdministration extends Document{
    nom_admin : string;
    prenom_admin : string;
    matricule_admin : string;
    date_naissance : string;
}