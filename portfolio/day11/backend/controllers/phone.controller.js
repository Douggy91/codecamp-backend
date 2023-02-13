import { MongoDB_Tokens } from "../mongodb/tokenSchema.model.js"

export class PhoneController {
    constructor(Tokens, tokenservice){
        this.Tokens = Tokens
        this.tokenservice = tokenservice
    }
    authToken=async (req,res)=>{
        const phone = req.body.phone
        const token = req.body.token
        const isValid = await this.Tokens.findOne({phone:phone})
        if (isValid==null){
            res.send(false)
        } else if (isValid.token != token){
            res.send(false)
        } else {
            if (isValid.isAuth===false){
                await this.Tokens.updateOne({phone:phone},{isAuth:true})
            }
            res.send(true)
        }
    }
    tokenGet=async (req,res)=>{
            const phone = req.body.phone
            const token = this.tokenservice.getToken(6)
            const isRegist = await this.Tokens.findOne({phone:phone})
            if (isRegist==null){
                const tokenBoard=MongoDB_Tokens(phone, token) // 등록
                tokenBoard.save()
            } else {
                await this.Tokens.updateOne({phone:phone},{token:token}) // 수정
            }
            console.log(phone, token)
            await this.tokenservice.sendToToken(phone, token)
            res.send({message: "핸드폰으로 인증 문자가 전송되었습니다.", token: token})
        }
}