var express = require("express")
var router = express.Router()
var {add,disp,del} = require("../controllers/catController")


router.get("/",disp)
router.post("/ins",add)
router.get("/del/:id",del)

module.exports = router