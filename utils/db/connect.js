const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://jonatanBasesDatos:G1I6R34kdtPqHfV8@pruebas.gr1akmu.mongodb.net/?retryWrites=true&w=majority&appName=pruebas";
// const DB_URL = "mongodb+srv://root:KEBORhhxfghZaJ4a@root.maejaze.mongodb.net/?retryWrites=true&w=majority";

const connect = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};


module.exports = connect;