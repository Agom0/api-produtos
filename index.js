const express = require ('express')
const app = express ()
const port = 6579;
require('./src/models')
const produtosRoutes = require ('./src/routes/produtos');
const { Users } = require('./src/routes');

app.use (express.json())
app.use(produtosRoutes)
app.use(UsersRoutes)

app.listen(port, () => {
    console.log(`Sevidor está rodando na porta ${port}`)
})