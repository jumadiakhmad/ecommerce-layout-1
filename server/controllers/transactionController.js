const Transactions = require('../models/transactionModel');

function createTransaction(req,res) {
  Transactions.create({
    transaction_date: new Date(),
    cutomer: req.body.customer,
    cakelist: req.body.cakelist,
    total: req.body.total
  }, (err,transaction) => {
    if(err) res.send(err)
    console.log(transaction);
    res.send(transaction)
  })
}

function getAllTransactions(req,res) {
  Transactions.find((err,transactions) => {
    if(err) res.send(err)
    console.log(transactions);
    res.send(transactions)
  })
}

function getOneTransaction(req,res) {
  let id= req.params.id
  Transactions.findById(id,(err,transaction) => {
    if(err) res.send(err)
    res.send(transaction)
  })
}

function getPopulated(req,res) {
    Transactions.find({customer: req.body.customer})
    .populate('customer cakelist')
    .then((err,result) => {
      if(err) res.send(err)
      res.send(result)
    })
}

function updateTransaction(req,res) {
Transactions.find({
  _id: req.params.id
}, (err,transaction) => {
  Transactions.update({
    _id: transaction[0].id
  }, {
    $set: {
      transaction_date: new Date(),
      customer: req.body.customer,
      cakelist: req.body.cakelist,
      total: req.body.total
    }
  },(err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
})
}

function deleteTransaction(req,res) {
  Transactions.remove({
    _id: req.params.id
  }, (err,transaction) => {
    if(err) res.send(err)
    console.log('Succes Delete Transaction');
    res.send(transaction)
  })
}

module.exports = {
  getAllTransactions, getOneTransaction, createTransaction, getPopulated,updateTransaction,
  deleteTransaction
}
