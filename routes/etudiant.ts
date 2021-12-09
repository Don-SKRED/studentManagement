import express from 'express';

import controller from '../controllers/etudiant';

const router = express.Router();

router.post('/create/etudiant', controller.createEtudiant);
router.get('/get/etudiant', controller.createEtudiant);
router.put('/update/etudiant/:id', controller.updateEtudiant);
router.delete('/delete/etudtiant/:id', controller.deleteEtudiant);


export = router;