const express = require('express')
const router = express.Router()
const produtosController = require("../controllers/podutos")
const produtosMiddleware = require('../middlewares/produtos')

router.get('/produtos', produtosController.getProdutos)
router.post('/produtos',
    produtosMiddleware.validateCreateProduto,
    produtosController.createProdudo
)
router.delete(
    '/produtos/:id',
    produtosMiddleware.validateDeleteProduto,
    produtosController.deleteProduto
)

module.exports = router;