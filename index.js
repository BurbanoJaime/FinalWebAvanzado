const express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


// Iniciar servidor
app.listen(process.env.PORT || 5000);


// Dirección del index
app.get('/', (req, res) => {
    res.render('index');
});
