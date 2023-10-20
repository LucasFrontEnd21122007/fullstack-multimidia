const express = require("express");
const app = express();
const BodyParser = require('body-parser');
const routes = require('./src/routes');
//configurações da aplicação
app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
//configurando rotas
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("servidor rodando na porta ${port}");
})