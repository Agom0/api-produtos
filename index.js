const express = require ('express')
const app = express ()
const port = 6579;
const produtosRoutes = require ('./src/routes/produtos')

app.use (express.json())
app.use(produtosRoutes)

app.listen(port, () => {
    console.log(`Sevidor está rodando na porta ${port}`)
})