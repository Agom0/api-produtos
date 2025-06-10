const express = require ('express')
require('dotenv').config()
const app = express ()
const port = process.env.PORT || 6579;
require('./src/models')
const produtosRoutes = require ('./src/routes/produtos');
const UsersRoutes = require('./src/routes/users');
const authRoutes = require('./src/routes/auth');

app.use (express.json())
app.use(produtosRoutes)
app.use(UsersRoutes)
app.use(authRoutes)

app.listen(port, () => {
    console.log(`Sevidor está rodando na porta ${port}`)
})