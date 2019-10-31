const express = require('express');
const bodyParser = require('body-parser')

const db = require('./db')
db('mongodb+srv://Seryi:ws1rv7TKiiUiAYun@platzi-ouadv.mongodb.net')
//const router = require('./components/message/network')
const router = require('./network/routes')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(router);
router(app)

app.use('/app', express.static('public'));


app.listen(3000);
console.log('La aplicaci[on esta escuchando en http://localhost:3000')