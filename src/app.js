const express = require('express');

const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();


// importando rutas

const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');

//settings

app.set('port',process.env.PORT || 3000);

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));


//middlewares
app.use(morgan('dev'));


app.use(myConnection(mysql,{
    host:'localhost',
    user: 'root',
    password: 'StarWars2019_',
    database: 'appAmbiental',

},'single'));



app.use(express.urlencoded({extended:false}))
app.use(express.json());


//routers 

app.use('/',customerRoutes);


//static files

app.use(express.static(path.join(__dirname,'public')));

//staring sever

app.listen(app.get('port'),() => {
    console.log("server on port 3000");
});