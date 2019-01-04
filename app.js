const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

 const {getHomePage} = require('./routes/index');
 const {addClientePage, addCliente, deleteCliente, editCliente, editClientePage, vendaCliente, vendaClientePage} = require('./routes/cliente');
const port = 8080;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'b4f906c0d6db44',
    password: '66c0fb51',
    database: 'heroku_b2f4fa9af135325'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.PORT || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app

app.get('/', getHomePage);
app.get('/add', addClientePage);
app.get('/edit/:clientesId', editClientePage);
app.get('/vendas/:clientesId', vendaClientePage);
app.get('/delete/:clientesId', deleteCliente);
app.post('/add', addCliente);
app.post('/vendas/:clientesId', vendaCliente);
app.post('/edit/:clientesId', editCliente);


// set the app to listen on the port
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port: ${port}`);
});
