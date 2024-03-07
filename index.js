const express = require('express');
const cors = require('cors');

const tareasRouter = require('./routes/tareas.routes.js');
const  connect = require('./utils/db/connect.js');

connect();

const PORT = process.env.PORT || 4000;
const server = express();

// Para usar POSTMAN. instalar la dependencia cors npm install --save cors, corsOtions    
server.use(cors());
// Parsea Post y Put que vienen como JSON.
server.use(express.json());
// Parsea Post y Put que vienen como STRING o ARRAY.
server.use(express.urlencoded({ extended: false }));

// Mensage para la ruta vacia de vercel.
server.get('/', (req,res) => {
    res.json("Vamos a poner tareas!");
});

server.use('/tareas', tareasRouter);

server.listen(PORT, () => {
    console.log(`El servidor esta escuchado en http://localhost:${PORT}`);
});