var express = require('express');
var app = express();

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});