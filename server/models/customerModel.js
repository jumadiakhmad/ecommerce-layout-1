var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  name : {
    type: String,
    unique: true,

  },
  username: String,
  password: String,
  role: String
});

var Customers = mongoose.model('Customers', customersSchema);

module.exports = Customers;
