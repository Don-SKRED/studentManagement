import mongoose from 'mongoose';

const url = 'mongodb://127.0.0.1:27017/student_manage';

    //check if connection succeeds
    // database = Mongoose.connection;
    // database.once('open', _=> { console.log('Database connected :', url)})
    // database.on('error', err => {console.error('connection error: ', err)})

    export const connectDatabase = () => {
        const client =  mongoose.connect(url, (err: any) => {
            if (err){
                console.log(err.message)
            }
            else
            {
                console.log("Successfully connected to mongodb")
            }
        });
    }

