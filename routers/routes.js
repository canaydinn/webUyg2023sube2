const router=require("express").Router()
const {login,register}=require("../controllers/controller")
const Validation=require("../middlewares/validation")
router.post("/login",login)
router.post("/register",register)

module.exports=router