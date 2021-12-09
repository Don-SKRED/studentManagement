import { Document } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.
export default interface INiveau extends Document{
    niveau_etude: string;

}