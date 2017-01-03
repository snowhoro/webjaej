var express = require('express');
var mongoose = require('mongoose');
var app = express();
var config = require('./config');
var fs = require('fs');
var i18n = require('i18n');

//db connection
mongoose.connect(config.test_db);
var dbconnect = mongoose.connection;
dbconnect.on('error', console.error.bind(console, 'connection error:'));
dbconnect.on('open', console.log.bind(console, 'connection ok'));


i18n.configure({
    // setup some locales - other locales default to en silently
    locales: ['en', 'es'],
    directory: __dirname + '/locales',
});

app.use(i18n.init);

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

