import {NextFunction, Request, Response } from 'express';
import Cours from '../models/cours';
import mongoose from 'mongoose';


const createCours = (req: Request, res: Response, next: NextFunction) =>
{
    let { nom_cours, heure_cours, date_cours, id_niveau } = req.body;

    const cours = new Cours({
        _id : new mongoose.Types.ObjectId(),
        nom_cours,
        heure_cours,
        date_cours,
        id_niveau
      
    });
    return cours.save()
    .then(result => {
        return res.status(201).json({
            cours: result
        });
    })
    .catch(error => {
        return res.status(500).json(
            { message : error.message, 
            error});
    })
  
}
const getAllcours = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    Cours.find()
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
const updateCours = (req: Request, res: Response, next: NextFunction) => {
    let {  nom_cours, heure_cours, date_cours, id_niveau} = req.body;
    let id: string = req.params.id;

    Cours.findOneAndUpdate({_id : id }, { nom_cours:nom_cours ,heure_cours: heure_cours, date_cours: date_cours, id_niveau }, {new : true})
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
const deleteCours = (req: Request, res: Response, next: NextFunction) => {
let id: string = req.params.id;

Cours.findByIdAndDelete(id)
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
export default {getAllcours, createCours, updateCours, deleteCours};
