const express = require('express')
const router = express.Router('../controllers/produtos')

router.get('/produtos', produtosController.getProdutos)

module.exports = router;