import express from 'express';
import controller from '../controllers/administration';


const router = express.Router();
router.get('/get/administration', controller.getAllAdmin);
router.post('/create/administration', controller.createAdmin);
router.put('/update/administration/:id', controller.updateAdmin);
router.delete('/delete/administration/:id', controller.deleteAdmin);


export = router;