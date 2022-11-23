require('dotenv').config();
const express = require('express');
const cors = require('cors');
const  cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const productRouter = require('./router/product-router');
const fileupload = require('express-fileupload');
const path = require('path')


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))


app.use(cors({
    "credentials":true,
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    'Access-Control-Allow-Credentials':true,
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Methods': "POST, GET, OPTIONS",
    'Access-Control-Allow-Headers': 'Content-Type'
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileupload({createParentPath: true}));
app.use('/api/', productRouter);
app.use(cookieParser());


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`[SERVER] SERVER IS RUNNING ON PORT: ${PORT}`);
        })
        process.on('SIGTERM', () => {
            app.close(() => {
                console.log('Process terminated')
            })
        })

    } catch (e) {
        console.log(e);
    }
}

start();