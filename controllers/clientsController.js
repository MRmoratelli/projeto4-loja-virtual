const dataBase = require("../database/models")


const funcaoClients = async (req, res) => {
    const result = await dataBase.Clients.findAll()
    if (result) {
        return res.send(result)
    }
    return res.send("ninguem cadastrado")
}

const postClients = async (req, res) => {
    const result = await dataBase.Clients.findOne({
        where : {
            email: req.body.email
        }
    })

   if (result) {
    return res.send("Usuario já cadastrado")
   }

   await dataBase.Clients.create( 
    req.body
   )

   return res.send("usuario cadastrado")

}

const deleteClients = async (req, res) => {
    const result = await dataBase.Clients.findOne({
        where : {
            id : Number(req.params.id)
        }
    })

    if (!result) {
        return res.send("usuario nao existe")
    }

    await dataBase.Clients.destroy({
        where : {
            id : Number(req.params.id)
        }
    })
 
    return res.send("deletado com sucesso")
    
}

const updateClients = async (req, res) => {
    const result = await dataBase.Clients.findOne({
        where : {
            id : Number(req.params.id)
        }
    })

    if (!result) {
        return res.send("usuario nao existe")
    }

    await dataBase.Clients.update(req.body, {
    where : {
        id : Number(req.params.id)
    }
})
return res.send("cliente editado com sucesso")
}

module.exports = {
    funcaoClients,
    postClients,
    deleteClients,
    updateClients
}