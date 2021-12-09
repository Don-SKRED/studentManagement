import express from 'express';
import controller from '../controllers/cours';


const router = express.Router();
router.get('/get/cours', controller.getAllcours);
router.post('/create/cours', controller.createCours);
router.put('/update/cours/:id', controller.updateCours);
router.delete('/delete/cours/:id', controller.deleteCours);


export = router;