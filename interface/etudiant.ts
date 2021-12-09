import { Document } from 'mongoose';

export default interface IEtudiant extends Document{
nom_etudiant: string;
prenom_etudiant: string;
num_etudiant: number;
num_matricule: string;
annee_scolaire: string;
id_niveau: string;
id_filiere: string;
}
