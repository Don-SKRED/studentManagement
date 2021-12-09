import express from 'express';
import controller from '../controllers/presence';


const router = express.Router();
router.get('/get/presence', controller.getAllPresence);
router.post('/create/presence', controller.createPresence);
router.put('/update/presence/:id', controller.updatePresence);
router.delete('/delete/presence/:id', controller.deletePresence);


export = router;