const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
router.get('/',customerController.list);
router.post('/add',customerController.save);
router.get('/delete/:problem_id',customerController.delete);
router.get('/update/:problem_id',customerController.edit);
router.post('/update/:problem_id',customerController.update);
router.get('/Orden',customerController.orden);
router.get('/Buscar',customerController.buscar_inicial);
router.post('/Buscar',customerController.buscar);

module.exports = router;