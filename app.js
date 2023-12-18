const express= require("express")
const app=express()
const router=require("./routers")
require("dotenv/config")


app.use(express.json({limit:"50mb",extended:true,parameterLimit:500000}))
app.use("/api",router)
app.listen(process.env.PORT)