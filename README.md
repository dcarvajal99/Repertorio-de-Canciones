# Repertorio-de-Canciones

![image](https://github.com/dcarvajal99/Repertorio-de-Canciones/assets/113071563/24b8755f-5c8f-4c48-9ca9-4a81894e76eb)

# Backend para gestión de canciones - Proyecto de Tarea

Este repositorio contiene el backend de una aplicación web para la gestión de canciones. El objetivo de este proyecto es implementar un servidor Express que utilice el módulo File System para agregar, modificar y eliminar canciones almacenadas en un archivo JSON local llamado "repertorio.json". Además, se proporcionan rutas de tipo API REST para interactuar con las canciones.

## Requisitos

- Node.js debe estar instalado en tu máquina.

## Instalación

1. Clona este repositorio en tu máquina local:

git clone <URL_DEL_REPOSITORIO>

2. Navega hasta el directorio del proyecto:

cd backend-web

3. Instala las dependencias necesarias:

npm install

# Uso
1. Asegúrate de tener el archivo JSON "repertorio.json" en el directorio raíz del proyecto. Este archivo se utilizará para almacenar las canciones.

2. Inicia el servidor Express

node app.js

3.El servidor se ejecutará en el puerto 3000 por defecto. Puedes acceder a las rutas de la API REST utilizando herramientas como cURL, Postman o cualquier cliente HTTP.

#Rutas de la API REST

El servidor Express proporciona las siguientes rutas para administrar el repertorio de canciones:

POST /canciones: Agrega una nueva canción al repertorio. Los datos de la canción deben enviarse en el cuerpo de la solicitud.

GET /canciones: Devuelve todas las canciones registradas en el repertorio en formato JSON.

PUT /canciones/:id: Edita los datos de una canción existente. Se debe proporcionar el ID de la canción en la URL y los nuevos datos en el cuerpo de la solicitud.

DELETE /canciones/:id: Elimina una canción del repertorio. Se debe proporcionar el ID de la canción en la URL.

Asegúrate de seguir el formato correcto para enviar los datos y los parámetros requeridos en cada ruta.

#Contribución
Este proyecto se creó como parte de una tarea. Por lo tanto, no se aceptarán contribuciones externas.

#Licencia
Este proyecto es de uso libre y está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.




