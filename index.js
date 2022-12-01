const express = require('express');
// const path = require('path');
require("dotenv").config();//Para usar variaveis de ambiente do arquivo .env
const app = express();
const routerClients = require("./routes/clients")
const routerProducts = require("./routes/products")

const port = process.env.PORT || 3001;  
// Usando variaveis de ambiente no lugar (arquivo .env)


//Rotas - carregar modulos de rotas:


//Rotas - montar a função middleware no caminho especificado:
app.use(express.json());
app.use("/clients-api", routerClients)
app.use("/products-api", routerProducts)


app.listen(port, function(){
    console.log("Aplicativo Rodando!!");
});

//Rodar no terminal com: node run watch
