const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sessionConfig = require('./config/session');
const session = require('express-session');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
     res.header("Access-Control-Allow-Credentials", "true");
     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(session(sessionConfig));
app.use(cookieParser());

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') == 'development' ? err : {};

    res.staus(err.status || 500);
});

app.get('/*', (req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-stoe');
    next();
})

app.use('/api', indexRouter);

module.exports = app;