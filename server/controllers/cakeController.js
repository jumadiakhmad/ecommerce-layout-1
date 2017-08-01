var Cakes = require('../models/cakeModel');

function getAllCakes(req, res) {
  Cakes.find({}, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function getOneCake(req, res) {
  Cakes.find({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following record:");
    console.log(result);
    res.send(result);
  });
}

function createCake(req, res) {
  Cakes.create({
    name:         req.body.name,
    description:  req.body.description,
    price:        req.body.price,
    category:     req.body.category,
    image:        req.body.image
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Insert:");
    console.log(result);
    res.send(result);
  });
}

function deleteCake(req, res) {
  Cakes.remove({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete:");
    console.log(result);
    res.send(result);
  });
}

function updateCake(req, res) {
  Cakes.find({
    _id: req.params.id
  }, function(err, item) {
    Cakes.update({
      _id: item[0]._id
    }, {
      $set: {
        name:         req.body.name || item[0].name,
        description:  req.body.description || item[0].description,
        price:        req.body.price || item[0].price,
        category:     req.body.category || item[0].category,
        stock:        req.body.stock || item[0].stock,
        image:        req.body.image || item[0].image,
        quantity: req.body.quantity || item[0].quantity
      }
    }, (err, result) => {
      if (err) return res.send(err.message)
        res.send(result);
    });
  });
}

module.exports = {
  getAllCakes, getOneCake, createCake, deleteCake, updateCake
}
