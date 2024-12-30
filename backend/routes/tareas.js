const express = require('express');
const Tarea = require('../models/Tarea');
const router = express.Router();

// Crear tarea
router.post('/', async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        const tareaGuardada = await nuevaTarea.save();
        res.status(201).json(tareaGuardada);
    } catch (err) {
        res.status(400).json({ error: 'Error al crear la tarea', detalles: err.message });
    }
});

// Obtener todas las tareas
router.get('/', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las tareas', detalles: err.message });
    }
});

// Actualizar tarea
router.put('/:id', async (req, res) => {
    try {
        const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(tareaActualizada);
    } catch (err) {
        res.status(400).json({ error: 'Error al actualizar la tarea', detalles: err.message });
    }
});

// Eliminar tarea
router.delete('/:id', async (req, res) => {
    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Tarea eliminada con éxito' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la tarea', detalles: err.message });
    }
});

module.exports = router;
