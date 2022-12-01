const dataBase = require("../database/models")

const verificarProduto = async (req, res) => {
    const result = await dataBase.Products.findAll()
    if (result) {
        return res.send(result)
    }
    return res.send("ninguem cadastrado")
}

const postProducts = async (req, res) => {
    const result = await dataBase.Products.findOne({
        where : {
            name: req.body.name
        }
    })

   if (result) {
    return res.send("produto já cadastrado")
   }

   await dataBase.Products.create( 
    req.body
   )

   return res.send("produto cadastrado")

}

const deleteProducts = async (req, res) => {
    const result = await dataBase.Products.findOne({
        where : {
            id : Number(req.params.id)
        }
    })

    if (!result) {
        return res.send("produto nao existe")
    }

    await dataBase.Products.destroy({
        where : {
            id : Number(req.params.id)
        }
    })
 
    return res.send("deletado com sucesso")
    
}

const updateProducts = async (req, res) => {
    const result = await dataBase.Products.findOne({
        where : {
            id : Number(req.params.id)
        }
    })

    if (!result) {
        return res.send("produto nao existe")
    }

    await dataBase.Products.update(req.body, {
    where : {
        id : Number(req.params.id)
    }
})
return res.send("produto editado com sucesso")
}


module.exports = {
    verificarProduto,
    postProducts,
    deleteProducts,
    updateProducts
}