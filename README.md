# Proyecto de Subida de Archivos con Express.js

## Descripción
Este proyecto implementa un servidor básico con Express.js que permite la creación de productos y la subida de imágenes. Utiliza Multer para manejar la subida de archivos y guarda las imágenes en una carpeta llamada `uploads`.

## Decisiones Tomadas
- **Express.js**: Elegido por su simplicidad y capacidad para crear servidores web rápidamente.
- **Multer**: Utilizado para manejar la subida de archivos debido a su facilidad de configuración y flexibilidad.
- **Estructura Modular**: El proyecto está organizado en rutas, controladores y middlewares para mantener un código limpio y fácil de mantener.

## Configuraciones Aplicadas
- **Servidor Express**: Configuración básica con middleware para el manejo de errores.
- **Multer**: Configuración para aceptar únicamente archivos de imagen (jpg, png) y guardarlos en la carpeta `uploads`.
- **Manejo de Rutas y Controladores**: Modularización para una mejor organización del código.

## Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/OcampoEmiliano/subida-archivos.git
   cd subida-archivos

npm install

mkdir uploads

npm run dev

http://localhost:3000.

## Endpoints
Crear un Producto
URL: http://localhost:3000/products

Método: POST

Campos:

name: Nombre del producto (string)

description: Descripción del producto (string)

price: Precio del producto (number)

image: Imagen del producto (file - jpg, png)

## Estructura del Proyecto
app.js: Configuración básica del servidor.

routes/: Contiene las rutas del proyecto.

controllers/: Contiene los controladores que manejan la lógica del negocio.

middlewares/: Contiene la configuración de Multer para la subida de archivos.