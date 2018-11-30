const express = require('express'),
    engines = require('consolidate');

var app = express();


var admin = require("firebase-admin");

var serviceAccount = require("./portafolio-39a28-firebase-adminsdk-z6paf-9213ca177d.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://portafolio-39a28.firebaseio.com"
});

const db = admin.database();
var ref = db.ref("/portafolio-39a28");

ref.once("value", function (snapshot) {
    console.log(snapshot.val());
});

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