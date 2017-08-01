const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var transactionSchema = new Schema({
  transaction_date: Date,
  customer: {type: Schema.Types.ObjectId, ref: 'Customers'},
  cakelist: [{ type: Schema.Types.ObjectId, ref: 'Cakes'}],
  total: Number
})

var Transaction = mongoose.model('Transactions', transactionSchema);

module.exports = Transaction;
