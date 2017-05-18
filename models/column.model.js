var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColumnSchema = mongoose.Schema({
  title: String//,
  //order: [{type: String}]
  }, { versionKey: false });

module.exports = mongoose.model('Column', ColumnSchema);