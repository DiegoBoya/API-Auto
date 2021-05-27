const express = require('express');
const router = express.Router();
const {createOne, deleteOne, getAll, updatedOne} = require('../controllers/autos');

router.get('/', getAll);
router.post('/', createOne);
router.put('/', updatedOne);
router.delete('/', deleteOne);

module.exports = router;