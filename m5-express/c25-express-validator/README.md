# Express / C25 / Middlewares & Validaciones

## Avisos parroquiales

- Encuesta

<img src="https://media.giphy.com/media/2DCFtFoiRj5Svwmwes/giphy.gif" width="300" />

## Middleware

### de aplicación

Son globales

### de ruta

Se implementan en cada ruta particular

### firma de la función

```
(req, res, next) => { }
```
### locals

Podemos agregarle a res.locals (objeto literal) data para luego tenerla disponible desde los controllers o vistas
### express-validator

https://express-validator.github.io/docs/

#### ¿Qué input validar?

https://express-validator.github.io/docs/check-api.html
####
```
const { body, validationResult } = require('express-validator');
```

```
[
    body('input_name')
        .notEmpty().withMessage('Escriba un nombre').bail()
        .isLength({ min: 2 }).widthMessage('Es muy corto')
]
```

#### Custom

```
custom((value, { req }) => {
    if (condicion) {
      throw new Error('Mensaje del error');
    }

    return true;
  }),
```

#### Leer errores en el controlador
```
const errors = validationResult(req)
const objectErrors = errors.mapped() // errores en formato objeto literal

errors.isEmpty() // devuelve si hay errores
```

## Objetivo parte práctica

- Validar alguno de los formularios