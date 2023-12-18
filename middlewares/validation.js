const joi=require("joi")
class Validation{
    constructor(){}
    static register=async(req,res,next)=>{
        try{
            await joi.object({
               ad_soyad:joi.string().trim().min(3).max(100).required().messages({
                "string.base":"İsim Alanı Normal Metin olmalıdır",
                "string.empty":"Bu alan boş olamaz",
                "string.min":"İsim Alanı En az 3 Karakter Olmalıdır",
                "string.max":"İsim Alanı En fazla 100 Karakter Olmalıdır",
                "string.required":"İsim Alanı Zorunludur"
               }),
               eposta:joi.string().trim().min(3).max(100).email().required().messages({
                "string.base":"E-Posta Alanı Normal Metin olmalıdır",
                "string.empty":"Bu alan boş olamaz",
                "string.min":"İsim Alanı En az 3 Karakter Olmalıdır",
                "string.max":"İsim Alanı En fazla 100 Karakter Olmalıdır",
                "string.email":"Bu alan eposta şeklinde olmalıdır",
                "string.required":"İsim Alanı Zorunludur"
               }),
               kullanici_sifre:joi.string().trim().min(3).max(100).required().messages({
                "string.base":"Kullanıcı Şifre Alanı Normal Metin olmalıdır",
                "string.empty":"Bu alan boş olamaz",
                "string.min":"Kullanıcı Şifre En az 3 Karakter Olmalıdır",
                "string.max":"Kullanıcı Şifre En fazla 100 Karakter Olmalıdır",
                "string.required":"İKullanıcı Şifre Zorunludur"
               }),
               kullanici_yetki_id:joi.number().trim().min(1).max(2).required().messages({
                "number.base":"Kullanıcı Yetki ID Alanı Sayı Olmalıdır",
                "number.min":"Kullanıcı Yetki ID En az 3 Karakter Olmalıdır",
                "number.max":"Kullanıcı Yetki ID En fazla 100 Karakter Olmalıdır",
                "number.required":"İKullanıcı Yetki ID Zorunludur"
               }),
               tarih:joi.string().trim().min(5).max(50).required.messages({
                "string.base":"Tarih Alanı Normal Metin olmalıdır",
                "string.empty":"Tarih Alanı boş olamaz",
                "string.min":"Tarih Alanı En az 3 Karakter Olmalıdır",
                "string.max":"Tarih Alanı En fazla 100 Karakter Olmalıdır",
                "string.required":"Tarih Alanı Zorunludur"
               })
            }).validateAsync(req.body)
        }catch(error){
            if(error.details&&error.details[0].message){
                res.json({status:"failure",code:"400",message:error.details[0].message})
            }else{
                res.json({status:"failure",code:"400",message:error.details[0].message})
            }
        }
        next()
    }
}

module.exports=Validation