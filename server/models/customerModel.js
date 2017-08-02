var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  name : {
    type: String,
    unique: true,

  },
  username: {
    type: String,
    unique: true
  },
  password: String,
  email: String,
});

var Customers = mongoose.model('Customers', customersSchema);

module.exports = Customers;
