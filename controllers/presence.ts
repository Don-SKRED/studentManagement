import {NextFunction, Request, Response } from 'express';
import Presence from '../models/presence';
import mongoose from 'mongoose';


const createPresence = (req: Request, res: Response, next: NextFunction) =>
{
    let { confirme,  id_administration, id_etudiant } = req.body;

    const presence = new Presence({
        _id : new mongoose.Types.ObjectId(),
        confirme,
        id_administration, 
        id_etudiant
    });
    return presence.save()
    .then(result => {
        return res.status(201).json({
            presence: result
        });
    })
    .catch(error => {
        return res.status(500).json(
            { message : error.message, 
            error});
    })
  
}
const getAllPresence = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    Presence.find()
    .exec()
    .then( results => {
        return res.status(200).json({
            presence : results,
            count : results.length

        })
    })
    .catch(error => {
        return res.status(500).json(
            { message : error.message, 
            error});
    })

}
const updatePresence = (req: Request, res: Response, next: NextFunction) => {
    let {  confirme, id_administration, id_etudiant } = req.body;
    let id: string = req.params.id;

    Presence.findOneAndUpdate({_id : id }, { confirme:confirme, id_administration: id_administration, id_etudiant: id_etudiant }, {new : true})
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
const deletePresence = (req: Request, res: Response, next: NextFunction) => {
let id: string = req.params.id;

Presence.findByIdAndDelete(id)
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
export default {getAllPresence, createPresence, updatePresence, deletePresence};
