# Task Manager

Task Manager es una aplicación de gestión de tareas construida con React en el frontend y Express con MongoDB en el backend. Permite a los usuarios crear, actualizar, y eliminar tareas.

## Características

- Crear nuevas tareas
- Marcar tareas como completadas o pendientes
- Eliminar tareas
- Listar todas las tareas

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
/c:/Users/Franco/OneDrive/Desktop/Coally - Task Manager/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── config.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── public/
│       ├── index.html
│       └── favicon.ico
├── README.md
└── package.json
```

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/franco-maioli03/Task-Manager.git
    ```
2. Navega al directorio del backend e instala las dependencias:
    ```bash
    cd backend
    npm install
    ```
3. Configura las variables de entorno en un archivo `.env`.
4. Inicia el servidor backend:
    ```bash
    npm start
    ```
5. Navega al directorio del frontend e instala las dependencias:
    ```bash
    cd ../frontend
    npm install
    ```
6. Inicia la aplicación frontend:
    ```bash
    npm start
    ```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.
