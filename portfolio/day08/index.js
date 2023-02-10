import express from 'express'
import cors from 'cors'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'
import mongoose from 'mongoose'
import { Tokens } from './token.model.js'

const app = express();
app.use(express.json());
app.use(cors());


app.post('/tokens/phone', async (req,res)=>{
    console.log(req.body.myphone)
    const myphone = req.body.myphone;
    const isVaild = checkValidationPhone(myphone)
    if (isVaild) {
        const token = getToken(6)
        sendTokenToSMS(myphone, token)

        const tokens = new Tokens({
            token: token,
            phone: myphone,
            isAuth: false
        })        
        res.send(`${myphone}으로 인증 문자가 전송되었습니다.`);
        const tokenValidation = await Tokens.findOne({phone: myphone})
        console.log((tokenValidation))
        if (tokenValidation==null) {
            tokens.save();
        } else {
            await Tokens.updateOne({phone:myphone}, {token:token})
        }
        
    }
})

app.patch('/tokens/phone', async (req, res)=>{
    const token = req.body.token
    const myphone = req.body.myphone
    console.log(token, myphone)
    const tokenValidation = await Tokens.findOne({phone:myphone})
    if (tokenValidation.token === token) {
        await Tokens.updateOne({phone:myphone}, {isAuth:true})
        res.send(true)
    } else {
        res.send(false)
        return
    }
}) 

// await mongoose.connect('mongodb://127.0.0.1:27017/myproject') // on_premise

await mongoose.connect('mongodb://mongo-backend:27017/myproject') // on_docker
app.listen(3000, ()=>{
    console.log(`Example app listening on port ${3000}`)
})