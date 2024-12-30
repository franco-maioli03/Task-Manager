import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task._id}>
                    {task.titulo} - {task.completado ? 'Completado' : 'Pendiente'}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
