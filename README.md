## GifExpertApp
Aplicación que muestra gifs obtenidos de giphy en pantalla y permite buscar otros con una barra de búsqueda


Hecho en react con javascript


Parte del curso de react que estoy tomando 

### Nota:
Algunas pruebas NO funcionan debido a que en el getGifs estoy haciendo uso de una variable de entorno y no puede acceder el jest a ese archivo (al parecer, la verdad no se bien por qué). Si quieren hacer pruebas, se tiene que cambiar la variable del apiKey en el archivo getGifs y añadirle el valor en duro de su apiKey.

### Pasos
0. Instalar yarn y crear proyecto nuevo de react + js
1. Obtener una API key de Giphy para mostrar los gifs ( o cualquier otra api que devuelva imagenes)
2. crear archivo ".env" y ahi pegar la api key, con el nombre "VITE_*" (el * puede ser cualquier nombre, pero necesita tener el VITE_ al inicio)
3. Ejecutar la app con yarn dev
4. En caso de querer hacer pruebas, manejarlo con jest y babel y hacer las instalaciones correspondientes con **yarn install**