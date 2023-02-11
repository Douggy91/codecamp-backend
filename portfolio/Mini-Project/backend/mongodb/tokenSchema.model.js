import mongoose from "mongoose";
import coolsms from "coolsms-node-sdk";
import dotenv from 'dotenv'

dotenv.config()
mongoose.set('strictQuery', false)

const Schema = new mongoose.Schema({
    token: String,
    phone: String,
    isAuth: Boolean,
})

export const Tokens = mongoose.model('tokens',Schema)

export function getToken(num){
    const token = String(Math.floor(Math.random()*10**num)).padStart(num,"0")
    return token
}

export function MongoDB_Tokens(phone, token){
    const tokenBoard = new Tokens({
        token: token,
        phone: phone,
        isAuth: false,
    })
    return tokenBoard
}

export async function sendToToken(phone, token){
    // const SMS_KEY = process.env.SMS_KEY
    // const SMS_SECRET = process.env.SMS_SECRET
    // const SMS_SENDER = process.env.SMS_SENDER

    // const mysms = coolsms.default 
    // const messageService = new mysms(SMS_KEY, SMS_SECRET)
    // const result = await messageService.sendOne({ // 한 명일 땐 객체, 여럿일 때는 배
    //         to: phone,
    //         from: SMS_SENDER,
    //         text: `인증번호는 ${token} 입니다.`
    // })
    console.log(result) //await가 없으면 promise<{pending}>이 반환될 것
    console.log(`${phone} 으로 인증번호 ${token} 을 전송합니다.`) 
}

// await mongoose.connect("mongodb://localhost:27017/myproject")