const express = require('express')
const router = express.Router()
const produtosController = require("../controllers/podutos")

router.get('/produtos', produtosController.getProdutos)
router.post('/produtos', produtosController.createProdudo)

module.exports = router;