const {Router} = require("express")
const router = Router()
const {funcaoClients, postClients, deleteClients, updateClients} = require("../controllers/clientsController")


router.get("/clients", funcaoClients)
router.post("/clients", postClients)
router.delete("/clients/:id", deleteClients)
router.put("/clients/:id", updateClients)



module.exports = router