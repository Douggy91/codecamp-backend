import { MongoDB_Users } from "../mongodb/userSchema.model.js"

export class UserContoller {
    constructor(Users, Tokens){
        this.Users = Users
        this.Tokens = Tokens
    }
    getUserList=async (req,res)=>{
        const result = await this.Users.find()
        console.log(result)
        res.send(result)
    }

    signupUserList=async (req,res)=>{
        const isAuthValid = await this.Tokens.findOne({phone:req.body.phone})
        console.log(isAuthValid, req.body)
        if (isAuthValid.isAuth) {
            const user = await MongoDB_Users(req.body)
            user.save()
            const id = await this.Users.findOne({phone: req.body.phone})._id
            res.send(id)
        } else {
            res.send(console.error('에러!! 핸드폰 번호가 인증되지 않았습니다.',422))
        }
    }
}