var express = require("express");
var app = express();

app.get('/', function(request, response){
    console.log(request);
    response.send("<h1 style='color:blue;'>Hellow World</h1>");
});

app.listen(8080, () => {
    var date = new Date();
    console.log("Server is Starting at http://localhost:8080 / " + date.toLocaleDateString() + " " + date.toLocaleTimeString());
});