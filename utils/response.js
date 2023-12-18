class Response{
    constructor(data=null,message=null,status){
        this.data = data;
        this.message = message;
        this.status = status;
    }
    success(res){
        return res.status(200).json({
            success:true,
            data:this.data,
            message:this.message??"İşlem Başarılı"
        })
    }
    created(res){
        return res.status(201).json({
            success:true,
            message:this.message??"Kayıt Başarılı"
        })
    }
    duplicated(res){
        return res.status(202).json({
            success:false,
            message:this.message??"Kayıt Zaten Mevcut"
        })
    }
    error500(res){
        return res.status(500).json({
            success:false,
            message:this.message??"Sunucu tarafında İşlem Başarısız"
        })
    }
    error400(res){
        return res.status(400).json({
            success:false,
            message:this.message??"Kullanıcı tarafında İşlem Başarısız"
        })
    }
    error401(res){
        return res.status(401).json({
            status:false,
            message:this.message??"Yetkisiz Giriş Lütfen Oturum Açın"
        })
    }
    error404(res){
        return res.status(404).json({
            status:false,
            message:this.message??"Sayfa Bulunamadı"
        })
    }
    error429(res){
        return res.status(429).json({
            status:false,
            message:this.message??"İstek Limiti Aştı"
        })
    }

}
module.exports=Response