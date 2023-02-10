import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const TokensSchema = new mongoose.Schema({
    token:String,
    phone: String,
    isAuth: Boolean
})

export const Tokens = mongoose.model("Tokens",TokensSchema)



