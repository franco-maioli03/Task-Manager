import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomePage = () => {
    return (
        <div>
            <h1>Gestor de Tareas</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default HomePage;
