var express = require('express');
var app = express();

var mongoose = require('mongoose');
var Column = require('./models/column.model');
var db = 'localhost/chep';
mongoose.Promise = global.Promise;
mongoose.connect(db);

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index')
})

var morgan = require('morgan');
app.use(morgan('dev'))

var bodyParser = require('body-parser');//для входящих данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/board', function(req, res){
  res.json(req.body.json)
})
app.get('/column', function(req, res){
    Column.find({})
	.exec(function(err, items) {
    	res.json(items);
  });
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});