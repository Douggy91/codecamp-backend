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



export function MongoDB_Tokens(phone, token){
    const tokenBoard = new Tokens({
        token: token,
        phone: phone,
        isAuth: false,
    })
    return tokenBoard
}



// await mongoose.connect("mongodb://localhost:27017/myproject")