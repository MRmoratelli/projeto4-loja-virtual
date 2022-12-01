const {Router} = require("express")
const router = Router()
// const {} = require("../controllers/usersController")

router.get("/users", verificarUsers)
router.post("/users", postUsers)
router.delete("/users/:id", deleteUsers)
router.put("/users/:id", updateUsers)

module.exports = router