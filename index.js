//передача данных между страницами
var express = require('express');
var app = express();

//?name=boss&age=100
app.get('/page1', function (req, res) {
  //res.send(req.query);//{"name":"boss","age":"100"}
  var name = req.query.name;
  res.send(name)//boss
});
app.post('/page1', function (req, res) {
  //res.send(req.query);//{"name":"boss","age":"100"}
  var name = req.query.name;
  res.send(name)//boss
});

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});