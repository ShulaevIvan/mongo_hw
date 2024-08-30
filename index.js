const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const contactRouter = require('./routes/Contact.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', contactRouter);

const PORT = process.env.PORT || 3000;
const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/demo_database');
        console.log('connected to mongo - ok');
    }
    catch(err) {
        console.log(err);
        process.exit(1);
    }
}

connectToDb();
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});