import React, { useState } from 'react';

const TaskForm = () => {
    const [titulo, setTitulo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar tarea al backend
        setTitulo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título de la tarea"
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default TaskForm;
