const mongoose = require('mongoose');

const menuPorSemanaSchema = new mongoose.Schema(
    {
      
    }
);

const MenuPorSemana = mongoose.model('MenuPorSemana', menuPorSemanaSchema);

module.exports = MenuPorSemana;