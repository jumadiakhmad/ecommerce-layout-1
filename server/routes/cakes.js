const express = require('express');
const router = express.Router();
const cakeController = require('../controllers/cakeController');

router.get('/', cakeController.getAllCakes);
router.get('/:id', cakeController.getOneCake);
router.post('/', cakeController.createCake);
router.delete('/:id', cakeController.deleteCake);
router.put('/:id', cakeController.updateCake);

module.exports = router;
