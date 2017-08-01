const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customerController');

router.get('/', customersController.getAll);
router.get('/:id', customersController.getSingle);
router.post('/', customersController.createCustomer);
router.delete('/:id', customersController.deleteCustomer);
router.put('/:id', customersController.updateCustomer);
router.post('/login', customersController.login);

module.exports = router;
