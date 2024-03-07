const mongoose = require('mongoose');

const tareasSchema = new mongoose.Schema(
    {
        titulo: { type: String, required: true },
        descripcion: { type: String, required: true },
        fecha_limite: { type: Date, default: null },
        fecha_ejecucion: { type: Date, default: null },
        completada: { type: Boolean, default: false },
        imagen: { type: String },
    }
);

const Tareas = mongoose.model('Tareas', tareasSchema);

module.exports = Tareas;