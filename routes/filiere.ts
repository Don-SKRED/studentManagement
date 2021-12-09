import express from 'express';
import controller from '../controllers/filiere';

const router = express.Router();

router.get('/get/filiere', controller.getAllFiliere);
router.put('/update/filiere/:id', controller.updateFiliere);
router.post('/post/filiere',controller.createFiliere);
router.delete('/delete/filiere/:id', controller.deleteFiliere);

export = router;