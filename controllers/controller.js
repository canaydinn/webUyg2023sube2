const dbconn=require("../db/mysql_connect")
const bcrypt=require("bcrypt")
const Response=require("../utils/response")
const login=async(req,res)=>{
return res.json(req.body)
}

const register=async(req,res)=>{
  const ad_soyad=req.body.ad_soyad
  const eposta=req.body.eposta
//  const kullanici_sifre=await bcrypt.hash(req.body.kullanici_sifre,12)

  const kullanici_sifre=req.body.kullanici_sifre
  const kullanici_yetki_id=req.body.kullanici_yetki_id
  const tarih=req.body.tarih
  dbconn.query("SELECT * FROM kullanicilar WHERE eposta=?",[eposta],(error,results)=>{
          if(results.length>0){
             return new Response("Kayıt Var").duplicated(res)
          }else{
            dbconn.query("INSERT INTO kullanicilar (ad_soyad,eposta,kullanici_sifre,kullanici_yetki_id,tarih) VALUES (?,?,?,?,?)",
              [ad_soyad,eposta,kullanici_sifre,kullanici_yetki_id,tarih],(error,results)=>{
                  return new Response("Kayıt Başarılı").created(res)
              })
          }      
  })
    
    
}
module.exports ={login,register}