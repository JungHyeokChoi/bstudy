var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var apiRouter = require('./routes/apiRouter.js');

var app = express();

app.set('views',path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use('/api', apiRouter);
app.use('/', (req, res) =>{
    res.send('Hello');
});

// app.get('/', function(request, response){
//     console.log(request.body);
//     response.render('index');
// });

app.listen(8080, () => {
    var date = new Date();
    console.log("Server is Starting at http://localhost:8080 / " + 
        date.toLocaleDateString() + " " + date.toLocaleTimeString());
});