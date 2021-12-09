import {NextFunction, Request, Response } from 'express';
import Etudiant from '../models/etudiant';
import mongoose from 'mongoose';


const createEtudiant = (req: Request, res: Response, next: NextFunction) =>
{
    let { nom_etudiant,
        prenom_etudiant,
        num_etudiant,
        num_matricule,
        annee_scolaire,
        id_niveau,
        id_filiere,
    } = req.body;

    const etudiant = new Etudiant({
        _id : new mongoose.Types.ObjectId(),
        nom_etudiant,
        prenom_etudiant,
        num_etudiant,
        num_matricule,
        annee_scolaire,
        id_niveau,
        id_filiere,
      
    });
    return etudiant.save()
    .then(result => {
        return res.status(201).json({
            etudiant : result
        });
    })
    .catch(error => {
        return res.status(500).json(
            { message : error.message, 
            error});
    })
  
}


const getAllEtudiant = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    Etudiant.find()
    .exec()
    .then( results => {
        return res.status(200).json({
            cours : results,
            count : results.length

        })
    })
    .catch(error => {
        return res.status(500).json(
            { message : error.message, 
            error});
    })
}
const updateEtudiant = (req: Request, res: Response, next: NextFunction) => {
    let {  nom_etudiant,
        prenom_etudiant,
        num_etudiant,
        num_matricule,
        annee_scolaire,
        id_niveau,
        id_filiere,
        id_cours } = req.body;
    let id: string = req.params.id;

    Etudiant.findOneAndUpdate({_id : id }, {nom_etudiant: nom_etudiant,
        prenom_etudiant: prenom_etudiant,
        num_etudiant: num_etudiant,
        num_matricule: num_matricule,
        annee_scolaire: annee_scolaire,
        id_niveau : id_niveau,
        id_filiere: id_filiere,})
            .then(result => {
                return res.status(201).json({
                    message: "update success"
                });
        })
            .catch(error => {
                return res.status(500).json(
                    { message : error.message, 
                    error});
            })

}
const deleteEtudiant = (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    
    Etudiant.findByIdAndDelete(id)
        .then(result => {
            return res.status(201).json({
                message: "delete success",
            });
        })
        .catch(error => {
            return res.status(500).json({
                messsage: error.message
            })
        });
    }
export default {getAllEtudiant, createEtudiant , updateEtudiant, deleteEtudiant};
