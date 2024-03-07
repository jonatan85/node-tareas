const express = require('express');
const Tareas = require('../models/Tareas.js');

const TareasRouter = express.Router();

TareasRouter.get('/', async (req, res, next) => {
    try {
        const tareas = await Tareas.find();
        return res.status(200).json(tareas)
    } catch(err) {
        next(err);
    }
});


TareasRouter.get('/:id',  async (req, res, next) => {
    const id = req.params.id;
    try {
        const tareas = await Tareas.findById(id);
        if (tareas) {
            return res.status(200).json(tareas);
        } else {
            next(createError('No existe la tarea con el id indicado', 404));
        }
    } catch (err) {
        next(err);
    }
  });


TareasRouter.post('/', async (req, res, next) => {
    try {
        const newTareas = new Tareas({...req.body});
        const createdTareas = await newTareas.save();
        return res.status(201).json(createdTareas);
    } catch (err) {
        next(err);
    }
});

TareasRouter.put('/:id', async (req, res, next) => {
    try {
       const id = req.params.id;
       const modifiedTareas = new Tareas({...req.body});
       //Para que no genere un id aleatorio y lo deje como fijo.
       modifiedTareas.id = id;
       // Para actualizar, Pero no me cambia los datos de la movie.
       const tareasUpdate = await Tareas.findByIdAndUpdate(
          id,
          modifiedTareas,
          //Añado new = true para que me traiga la movie con los cambios realizados.
          {new: true}
       );
       // Por ultimo el estatus json + paramatro
       return res.status(200).json(tareasUpdate);
    }catch (err) {
       next(err);
    }
});

TareasRouter.delete('/:id', async (req, res, next) => {
    try{  
       const id = req.params.id;
       await Tareas.findByIdAndDelete(id);
       return res.status(200).json('La tarea se a eliminado correctamente.')
    } catch(err) {
       next(err);
    }
  });

module.exports = TareasRouter;