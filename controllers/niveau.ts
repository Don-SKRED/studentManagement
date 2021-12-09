import {NextFunction, Request, Response } from 'express';
import Niveau from '../models/niveau';
import mongoose from 'mongoose';


const createNiveau = (req: Request, res: Response, next: NextFunction) =>
{
    let { niveau_etude } = req.body;

    const niveau = new Niveau({
        _id : new mongoose.Types.ObjectId(),
        niveau_etude
      
    });
    return niveau.save()
    .then(result => {
        return res.status(201).json({
            niveau: result
        });
    })
    .catch(error => {
        return res.status(500).json(
            { message : error.message, 
            error});
    })
  
}
const getAllNiveau = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    Niveau.find()
    .exec()
    .then( results => {
        return res.status(200).json({
            Niveau : results,
            count : results.length

        })
    })
    .catch(error => {
        return res.status(500).json(
            { message : error.message, 
            error});
    })

}
const updateNiveau = (req: Request, res: Response, next: NextFunction) => {
    let {  niveau_etude } = req.body;
    let id: string = req.params.id;

    Niveau.findOneAndUpdate({_id : id }, { niveau_etude: niveau_etude }, {new : true})
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
const deleteNiveau = (req: Request, res: Response, next: NextFunction) => {
let id: string = req.params.id;

Niveau.findByIdAndDelete(id)
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
export default {getAllNiveau, createNiveau, updateNiveau, deleteNiveau };
