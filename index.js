const express = require('express')
const app = express()
const port = 6579
const produtosDB = []
const usersDB = []

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Coroi viado, deu certo")
})

app.post("/produtos", (req, res) => {
    const { nome, preco, categoria } = req.body

   if (!nome || !preco || !categoria) {
        return res.status(400).send("nome, preco e categoria são obrigatórios!")
    }

    const produto = {
        nome: nome,
        preco: preco,
        categoria: categoria
    }

    produtosDB.push(produto)

    res.status(201).send(produto)
})

app.get("/produtos", (req, res) => {
    res.send(produtosDB)
})

app.get("/usuarios", (req, res) => {
    res.send("ok")
})

app.post("/usuarios", (req, res) => {
    const { nome, email, senha } = req.body

    if (!nome || !email || !senha) {
        return res.status(400).send("email, nome e senha são obrigatório!")
    }

    usersDB.push({ nome, email, senha })

    res.status(201).send("Usuário cadastrado com sucesso!")
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})