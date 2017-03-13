const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    fs = require('fs'),
    i18n = require('i18n-2'),
    autoIncrement = require('mongoose-auto-increment');

//db connection
mongoose.connect(config.test_db);
const dbconnect = mongoose.connection;
autoIncrement.initialize(dbconnect);
dbconnect.on('error', console.error.bind(console, 'connection error:'));
dbconnect.on('open', () => {
    console.log('connection ok');
    const createDB = require("./createDB");
    createDB();
});

i18n.expressBind(app, {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    directory: __dirname + '/locales',
    cookieName: 'locale',
    extension: '.json'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*app.use((req, res, next) => {
    //req.i18n.setLocale('en');
    next();
});*/

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.listen(3000, function(){
    console.log('Example of app port listen in 3000')
});

