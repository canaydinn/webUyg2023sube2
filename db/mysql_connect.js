const mysql=require("mysql")
require("dotenv/config")
var dbconn=mysql.createConnection({
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    host:process.env.MYSQL_HOST
})

dbconn.connect((err)=>{
   if(!err){
    console.log("Veritabanına Bağlandı")
   }else{
    console.log("Veritabanı Bağlantı Hatası")
   }
})
module.exports=dbconn