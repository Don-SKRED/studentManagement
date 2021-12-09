import bodyParser from "body-parser";
import express from "express";
import mongoose from 'mongoose';
import {Express, Request, Response} from "express";
import { connectDatabase } from "../database/database";
import coursRoutes from "../routes/cours";
import etudiantRoute from "../routes/etudiant";
import adminRoute from "../routes/administration";
import niveauRoute from "../routes/niveau";
import presenceRoute from "../routes/presence";
import filiereRoute from "../routes/filiere";

connectDatabase();
const app: Express = express();
const router = express.Router();

//cors
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})
//body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//création de route
app.use('/', coursRoutes);
app.use('/', niveauRoute);
app.use('/', presenceRoute);
app.use('/', filiereRoute);
app.use('/', etudiantRoute);
app.use('/', adminRoute);

//const httpserver = http.createServer(router);
const port:number = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));