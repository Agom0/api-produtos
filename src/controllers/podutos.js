const produtosModel = require('../models/produtos')


async function getProdutos(req, res) {
  try {
    const produtos = await produtosModel.getProdutos()

    return res.send(produtos)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Erro ao bruscar produtos')
  }
}

async function createProdudo(req, res) {
  try {
    const produto = await produtosModel.createProdudo(req.body)

    return res.status(201).send(produto)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Erro ao criar produto')
  }
}

async function deleteProduto(req, res) {
  const {id} = req.params;
  try {
    await produtosModel.deleteProduto(id)

    return res.status(202).send('Produto deletado com sucesso')
  } catch (error) {
    console.error(error)
    return res.status(500).send('Erro ao deletar o produto')
  }
}

module.exports = {
  getProdutos,
  createProdudo,
  deleteProduto
}