var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cakeSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  image: String,
  quantity: Number,
});

var Cakes = mongoose.model('Cakes', cakeSchema);

module.exports = Cakes;
