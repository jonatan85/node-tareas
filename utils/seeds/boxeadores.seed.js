const mongoose = require('mongoose');
const Tareas = require('../../models/Tareas.js');
const fs = require('fs').promises;


const DB_URL = "mongodb+srv://jonatanBasesDatos:G1I6R34kdtPqHfV8@pruebas.gr1akmu.mongodb.net/?retryWrites=true&w=majority&appName=pruebas";
// const DB_URL = "mongodb+srv://root:KEBORhhxfghZaJ4a@root.maejaze.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( async () => {
    const allTareas = await Tareas.find();

    if( allTareas.length ) {
        await Tareas.collection.drop();
    }
}).catch( error => {
    console.log(`Ha habido un error eliminando los datos ${error}`);
}).then( async () => {
        const filePath = './utils/seeds/db/tareas.json';
        const data = await fs.readFile(filePath, 'utf-8');
        const parseData = JSON.parse(data);
        const tareasDocs = parseData.map((tareas) => {
            return new Tareas(tareas);
        });
    await Tareas.insertMany(tareasDocs);
}).catch((error) => {
    console.log(`Ha habido un error añadiendo elementos a la base de datos ${error}`);
})
.finally(() => mongoose.disconnect());

