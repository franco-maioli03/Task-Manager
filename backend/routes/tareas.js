const express = require('express');
const Tarea = require('../models/Tarea');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Tarea:
 *       type: object
 *       required:
 *         - titulo
 *       properties:
 *         _id:
 *           type: string
 *           description: ID de la tarea
 *         titulo:
 *           type: string
 *           description: Título de la tarea
 *         descripcion:
 *           type: string
 *           description: Descripción de la tarea
 *         completado:
 *           type: boolean
 *           description: Estado de la tarea
 *         creadoEn:
 *           type: string
 *           format: date
 *           description: Fecha de creación de la tarea
 *       example:
 *         _id: 60d0fe4f5311236168a109ca
 *         titulo: Tarea de ejemplo
 *         descripcion: Esta es una tarea de ejemplo
 *         completado: false
 *         creadoEn: 2023-10-01T00:00:00.000Z
 */

/**
 * @swagger
 * tags:
 *   name: Tareas
 *   description: API para gestionar tareas
 */

/**
 * @swagger
 * /api/tareas:
 *   get:
 *     summary: Obtiene todas las tareas
 *     tags: [Tareas]
 *     responses:
 *       200:
 *         description: Lista de todas las tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarea'
 */
router.get('/', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las tareas', detalles: err.message });
    }
});

/**
 * @swagger
 * /api/tareas:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tareas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarea'
 *     responses:
 *       201:
 *         description: Tarea creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarea'
 *       400:
 *         description: Error al crear la tarea
 */
router.post('/', async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        const tareaGuardada = await nuevaTarea.save();
        res.status(201).json(tareaGuardada);
    } catch (err) {
        res.status(400).json({ error: 'Error al crear la tarea', detalles: err.message });
    }
});

/**
 * @swagger
 * /api/tareas/{id}:
 *   put:
 *     summary: Actualiza una tarea existente
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarea'
 *     responses:
 *       200:
 *         description: Tarea actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarea'
 *       400:
 *         description: Error al actualizar la tarea
 */
router.put('/:id', async (req, res) => {
    try {
        const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(tareaActualizada);
    } catch (err) {
        res.status(400).json({ error: 'Error al actualizar la tarea', detalles: err.message });
    }
});

/**
 * @swagger
 * /api/tareas/{id}:
 *   delete:
 *     summary: Elimina una tarea existente
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea eliminada con éxito
 *       500:
 *         description: Error al eliminar la tarea
 */
router.delete('/:id', async (req, res) => {
    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Tarea eliminada con éxito' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la tarea', detalles: err.message });
    }
});

module.exports = router;