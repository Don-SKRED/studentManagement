import {NextFunction, Response, Request} from 'express';
import mongoose from 'mongoose';
import  Filiere from '../models/filiere';

const getAllFiliere = (req: Request, res:Response, next:NextFunction) => {

     Filiere.find()
     .exec()
     .then(results => {
        return res.status(200).json(
            { filiere : results,
             count : results.length}
         )
     })
     .catch(error => {
        return res.status(500).json(
            { message: error.message, error}
         );
     })
}
const createFiliere = (req: Request, res:Response, next:NextFunction) => {
    let { nom_filiere, parcours} = req.body;
    const filiere = new Filiere({
        _id : new mongoose.Types.ObjectId(),
        nom_filiere, parcours
    })
      return filiere.save()
    .then(result => {
        return res.status(201).json({
            filiere: result
        });
    })
    .catch(error => {
        return res.status(500).json(
            { message : error.message, 
            error});
    })
}

const updateFiliere = (req: Request, res:Response, next:NextFunction) => {
    let { nom_filiere, parcours} = req.body;
    let id: string = req.params.id;
    Filiere.findOneAndUpdate({_id: id}, {  nom_filiere: nom_filiere, parcours: parcours})
    .then(result =>{
       return res.status(201).json({
            message : "update success"
        })
    })
    .catch(error =>{
       return  res.status(500).json({ message: error.message, error})
       
    })
}

const deleteFiliere = (req:Request, res:Response, next:NextFunction) => {
    let id: string = req.params.id;
    Filiere.findByIdAndDelete(id)
    .then(result =>{
        return res.status(201).json({
            message : "delete success"
        })
    })
    .catch(error =>{
        return res.status(500).json({ message: error.message, error})
       
    })
}

export default {getAllFiliere, createFiliere, updateFiliere, deleteFiliere}