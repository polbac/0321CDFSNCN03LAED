const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const method = require('method-override');
const notFoundMiddleware = require('./middlewares/notFound')

const app = express();

// middleware de aplicación
app.use((req, res, next) => {
  console.log('hola soy el primer middleware')
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(method('_method'));
app.use(logger('dev'));

// No olvidarse esto para que la data se envie correctamente desde un formulario
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// home
app.get('/', (req, res) => {
    res.render('home', {
        title: 'PLANETAS'
    })
})

// planets
const planetsRoutes = require('./routes/planetsRoutes')
app.use('/planets', planetsRoutes)

// users
const usersRoutes = require('./routes/usersRoutes')
app.use('/users', usersRoutes)

app.use(notFoundMiddleware)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
