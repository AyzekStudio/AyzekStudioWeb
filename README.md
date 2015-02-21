# Aysek Studio #
Aysek Studio Webpage

## Instalación básica de NodeJs en Ubuntu ##
```
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm install -g nodemon
sudo npm install -g flightplan
sudo npm install -g yo bower grunt-cli gulp
sudo npm install -g generator-kraken
sudo npm install -g express
```

## Después de clonar el repositorio ##
```
cd direccion/al/proyecto/
npm install
```

## Para correr el proyecto ##
```
nodemon server.js
```
El proyecto corre por defecto en [http://localhost:8000/](http://localhost:8000/)

## Para  enviar cambios al repositorio en el servidor de producción ##
```
cd direccion/al/proyecto/
fly production
```
