import {NextFunction, Request, Response } from 'express';
import Admin from '../models/administration';
import mongoose from 'mongoose';



const createAdmin = (req: Request, res: Response, next: NextFunction) =>
{
    let {nom_admin,
        prenom_admin,
        matricule_admin,
        date_naissance
       } = req.body;

    const admin = new Admin({
        _id : new mongoose.Types.ObjectId(),
        nom_admin,
        prenom_admin,
        matricule_admin,
        date_naissance
      
    });
    return admin.save()
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
const getAllAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    Admin.find()
    .exec()
    .then( results => {
        return res.status(200).json({
            admin : results,
            count : results.length

        })
    })
    .catch(error => {
        return res.status(500).json(
            { message : error.message, 
            error});
    })

}
const updateAdmin = (req: Request, res: Response, next: NextFunction) => {
    let {  nom_admin,
        prenom_admin,
        matricule_admin,
        date_naissance } = req.body;
    let id: string = req.params.id;

    Admin.findOneAndUpdate({_id : id }, { nom_admin:nom_admin ,prenom_admin: prenom_admin, matricule_admin: matricule_admin, date_naissance:date_naissance }, {new : true})
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
const deleteAdmin = (req: Request, res: Response, next: NextFunction) => {
let id: string = req.params.id;

Admin.findByIdAndDelete(id)
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
export default {getAllAdmin, createAdmin, updateAdmin, deleteAdmin};
