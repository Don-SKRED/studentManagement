import express from 'express';
import controller from '../controllers/niveau';

const router = express.Router();

router.get('/get/niveau', controller.getAllNiveau);
router.put('/update/niveau/:id', controller.updateNiveau);
router.post('/post/niveau',controller.createNiveau);
router.delete('/delete/niveau/:id', controller.deleteNiveau);

export = router;