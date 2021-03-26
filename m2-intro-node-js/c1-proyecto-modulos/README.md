# Introducción a Node

## Qué es Node

<img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1059538366%2F960x0.jpg%3Ffit%3Dscale"
width="680" />


## Ejecución de archivo node

```
node nombre_archivo
```
El .js (extensión del archivo) no es necesario

## Inicialización de proyecto npm

```
npm init
```

## Scripts
Podemos definir dentro de package.json los scripts que querramos y luego los ejecutamos.
```
"scripts": {
    "start": "node app.js",
  },
```
El script `start` lo ejecutamos como:
```
npm run start
```

## Módulos

### Qué es un módulo

Fragmento de código reutilizable que puede ser exportado/importado.

### Tipo de módulo
- Nativos
- Propios
- Terceros

### Instalar módulo de tercero

```
npm install nombre_modulo
```

### Importar módulo de tercero / nativo

```
const nombreModulo = require('nombre_modulo')
```

### Importar módulo de tercero / nativo

```
const nombreModuloPropio = require('./nombre_modulo')
```

### Exportar módulo

```
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', Viernes', 'Sábado', 'Domingo']
```

### Leer un archivo

```
const fs = require('fs')

const contentFile = fs.readFileSync(__dirname + '/texto.txt', 'utf-8')
console.log(contentFile)
```