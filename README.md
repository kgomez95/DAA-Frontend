# DAA-Frontend
Aplicación frontend desarrollada con Asp.Net Core para el proyecto "DataTables - Asp.Net Core - Angular".
<br />

# 0. Pasos para hacer funcionar el proyecto
<h2>0.1.- Requisitos previos</h2>
<p>El primer requisito es tener instalado Node.js y Angular CLI.</p>
<p>El segundo requisito es que te hayas descargado o clonado el proyecto DAA-Backend (https://github.com/kgomez95/DAA-Backend) y hayas ejecutado correctamente los dos puntos que se enumeran en el README de dicho repositorio. Obviamente, también es necesario tener el proyecto ejecutándose para poder recoger los datos para las tablas.</p>
<br />

<h2>0.2.- Preparar el proyecto</h2>
<p>Para hacer funcionar este proyecto una vez descargado o clonado tienes que abrir una línea de comandos en la carpeta del proyecto (en mi caso dentro de la carpeta "app") y ejecutar el siguiente comando:</p>
<ul>
    <li><b><i>npm install</i></b></li>
</ul>
<p>* Este comando instalará las dependencias necesarias para ejecutar la aplicación (creará la carpeta "node_modules").</p>
<p>Estas son las urls disponibles para probar en la aplicación:</p>
<ul>
    <li>http://localhost:4200/home</li>
    <li>http://localhost:4200/scores</li>
    <li>http://localhost:4200/videogames</li>
    <li>http://localhost:4200/platforms</li>
</ul>
<br />

<h2>0.3.- Ejecución el proyecto</h2>
<p>Para ejecutar la aplicación es necesario ejecutar el comando <b><i>ng serve</i></b> en la carpeta del proyecto.</p>
<br />

# 1.- Introducción
<p>Este pequeño proyecto se ha realizado en base al repositorio "DataTables-Angular" (https://github.com/kgomez95/DataTables-Angular), y tiene como objetivo hacer que las tablas de datos cojan todos sus valores realizando llamadas a un servicio web. Y con "recoger todos sus valores" me refiero a que cojan tanto las cabeceras de la tabla, como sus filtros, sus acciones y, por supuesto, sus datos.</p>
<br />
