const dataBase = require("../database/models")


const funcaoUsers = async (req, res) => {
    const result = await dataBase.Users.findAll()
    if (result) {
        return res.send(result)
    }
    return res.send("nenhum usuario cadastrado")
}

const postUsers = async (req, res) => {
    const result = await dataBase.Users.findOne({
        where : {
            name: req.body.name
        }
    })

   if (result) {
    return res.send("Usuario já cadastrado")
   }

   await dataBase.Users.create( 
    req.body
   )

   return res.send("usuario cadastrado")

}

const deleteUsers = async (req, res) => {
    const result = await dataBase.Users.findOne({
        where : {
            id : Number(req.params.id)
        }
    })

    if (!result) {
        return res.send("usuario nao existe")
    }

    await dataBase.Users.destroy({
        where : {
            id : Number(req.params.id)
        }
    })
 
    return res.send("deletado com sucesso")
    
}

const updateUsers = async (req, res) => {
    const result = await dataBase.Users.findOne({
        where : {
            id : Number(req.params.id)
        }
    })

    if (!result) {
        return res.send("usuario nao existe")
    }

    await dataBase.Users.update(req.body, {
    where : {
        id : Number(req.params.id)
    }
})
return res.send("cliente editado com sucesso")
}

module.exports = {
    funcaoUsers,
    postUsers,
    deleteUsers,
    updateUsers
}