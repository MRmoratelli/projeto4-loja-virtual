const {Router} = require("express")
const router = Router()
const {funcaoUsers, postUsers, deleteUsers, updateUsers} = require("../controllers/usersController")

router.get("/users", funcaoUsers)
router.post("/users", postUsers)
router.delete("/users/:id", deleteUsers)
router.put("/users/:id", updateUsers)

module.exports = router

