const express = require('express');
const app = express();

// Ruta para servir el archivo JSON
app.get('/data', (req, res) => {
    // Define tu objeto JSON aquí o carga un archivo JSON desde el sistema de archivos
    const jsonData = {
        "message": "Hola mundo desde mi servidor JSON!",
        "fecha": new Date()
    };
    
    res.json(jsonData);
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor JSON iniciado en el puerto ${port}`);
});