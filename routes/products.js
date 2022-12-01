const {Router} = require("express")
const router = Router()
const {verificarProduto, postProducts, deleteProducts, updateProducts} = require("../controllers/productsController")

router.get("/products", verificarProduto)
router.post("/products", postProducts)
router.delete("/products/:id", deleteProducts)
router.put("/products/:id", updateProducts)

module.exports = router