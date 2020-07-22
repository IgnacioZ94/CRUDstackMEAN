const express = require('express');
const router = express.Router();

const peopple = require('../controllers/peopple-controller');

router.get('/', peopple.getPeople);
router.post('/', peopple.createUser);
router.get('/:id',peopple.getUser);
router.put('/:id',peopple.editUser);
router.delete('/:id',peopple.deleteUser);


module.exports = router;