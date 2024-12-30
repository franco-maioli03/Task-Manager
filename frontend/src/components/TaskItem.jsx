import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import axios from 'axios';

const TaskItem = ({ task, onTaskUpdated }) => {
    const { fetchTasks } = useContext(TaskContext);

    // Marcar tarea como completada o pendiente
    const toggleCompleted = async () => {
        try {
            await axios.put(`http://localhost:3000/api/tareas/${task._id}`, {
                completado: !task.completado,
            });
            onTaskUpdated(); // Refresca la lista de tareas
        } catch (error) {
            console.error('Error al actualizar la tarea:', error);
        }
    };

    // Eliminar tarea
    const deleteTask = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/tareas/${task._id}`);
            onTaskUpdated(); // Refresca la lista de tareas
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
        }
    };

    return (
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div>
                <strong>{task.titulo}</strong> - {task.completado ? 'Completado' : 'Pendiente'}
                <br />
                <small>Creado en: {new Date(task.creadoEn).toLocaleDateString()}</small>
            </div>
            <div>
                <button onClick={toggleCompleted}>
                    {task.completado ? 'Marcar como Pendiente' : 'Marcar como Completada'}
                </button>
                <button onClick={deleteTask} style={{ marginLeft: '10px', color: 'red' }}>
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
