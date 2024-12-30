const express = require('express');
const mongoose = require('mongoose');
const tareasRoutes = require('./routes/tareas');
const cors = require('cors');
require('dotenv').config();
const swaggerSetup = require('./swagger');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/tareas', tareasRoutes);

// Configuración de Swagger
swaggerSetup(app);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));