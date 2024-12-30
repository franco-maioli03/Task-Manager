const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String },
    completado: { type: Boolean, default: false },
    creadoEn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tarea', tareaSchema);
