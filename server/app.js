// Instala los módulos necesarios
// npm install express multer

import express, { json } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para el manejo de errores básicos y protección de rutas
app.use(json());

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Manejo de rutas y middlewares modulares
import {productRouter} from './routers/products.router.js';
app.use('/POST', productRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
