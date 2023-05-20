const express = require('express');
const morgan = require('morgan');

const app = express();

//Settings 
app.set('port',process.env.PORT||3100);
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

//Middlewars
app.use(express.json());
app.use(morgan('dev'));
app.use(require('./routes/dulces.routes'));

module.exports=app;