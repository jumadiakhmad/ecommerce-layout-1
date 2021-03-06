const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const customers = require('./routes/customers');
const cakes = require('./routes/cakes');
const transactions = require('./routes/transactions');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://Jumadi:02052013julita@cluster0-shard-00-00-7lyz2.mongodb.net:27017,cluster0-shard-00-01-7lyz2.mongodb.net:27017,cluster0-shard-00-02-7lyz2.mongodb.net:27017/ecommerce-jumadi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/customers/', customers);
app.use('/cakes/', cakes);
app.use('/transactions/', transactions);

app.listen(3000, () => console.log("Listening on port 3000"));
