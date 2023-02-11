import express from 'express'
import mongoose from 'mongoose'
import { Users, MongoDB_Users } from './mongodb/userSchema.model.js'
import { getToken, Tokens, MongoDB_Tokens, sendToToken} from './mongodb/tokenSchema.model.js'
import { StarBucks } from './mongodb/starbucksSchema.model.js'
import cors from 'cors'

const app = express()
app.use(express.json());
app.use(cors('http://localhost:3000/','https://localhost:3000/')) 

app.post('/users', async (req,res)=>{
    const isAuthValid = await Tokens.findOne({phone:req.body.phone})
    console.log(isAuthValid, req.body)
    if (isAuthValid.isAuth) {
        const user = await MongoDB_Users(req.body)
        user.save()
        const id = await Users.findOne({phone: req.body.phone})._id
        res.send(id)
    } else {
        res.send(console.error('에러!! 핸드폰 번호가 인증되지 않았습니다.',422))
    }
})

app.get('/users', async (req,res)=>{
    const result = await Users.find()
    console.log(result)
    res.send(result)
})

app.post('/tokens/phone', async (req,res)=>{
    const phone = req.body.phone
    const token = getToken(6)
    const isRegist = await Tokens.findOne({phone:phone})
    if (isRegist==null){
        const tokenBoard=MongoDB_Tokens(phone, token) // 등록
        tokenBoard.save()
    } else {
        await Tokens.updateOne({phone:phone},{token:token}) // 수정

    }
    console.log(phone, token)
    // sendToToken(phone, token)
    res.send("핸드폰으로 인증 문자가 전송되었습니다.")
})

app.patch('/tokens/phone', async (req,res)=>{
    const phone = req.body.phone
    const token = req.body.token
    const isValid = await Tokens.findOne({phone:phone})
    if (isValid==null){
        res.send(false)
    } else if (isValid.token != token){
        res.send(false)
    } else {
        if (isValid.isAuth===false){
            await Tokens.updateOne({phone:phone},{isAuth:true})
        }
        res.send(true)
    }
})

app.get('/starbucks', async (req,res)=>{
    const result = await StarBucks.find()    
    res.send(result)
})

await mongoose.connect("mongodb://localhost:27017/myproject")

app.listen(3000, ()=>{
    console.log('welcome in new server port 3000')
})