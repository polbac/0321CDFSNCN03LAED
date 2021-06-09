# Express / C24 / Multer

<img src="https://media.tenor.com/images/ee030f1ebf222f4e88dedd3fe149347d/tenor.gif" width="250" />

## Anuncios

- Co-learning (¿jueves horario?)
- Proyecto Integrador

## Configurando Multer

```
npm i multer
```

## Implementando multer

### HTML
```
enctype="multipart/form-data"
```

### Rutas
```
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images'))
    },
    filename: (req, file, cb) => {
        const extensionFile = path.extname(file.originalname)
        cb(null, `${Date.now()}${extensionFile}`)
    },
})

const multerUploader = multer({ storage })

planetsRoutes.post('/create', multerUploader.single('image'), planetsController.store);
```

### Controller

```
const { file } = req;
```


## Objetivo parte práctica

- Poner multer en alguno de nuestros endpoints