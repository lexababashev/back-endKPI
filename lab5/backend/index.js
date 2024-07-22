import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router.js';
import dotenv from 'dotenv';

const PORT = 3000;

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
app.use('/api', router);

mongoose
    .connect(process.env.MONGO_URI) 
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(error => {
        console.log(error)
    })

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
