import mongoose from "mongoose";
import cheerio from "cheerio"
import axios from 'axios'

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    personal: String,
    perfer: String,
    pwd: String,
    phone: String,
})

export const Users = mongoose.model('users',Schema)

export function MongoDB_Users({name, email, personal, prefer, pwd, phone}) {
    const preferOG = scrapingOG(prefer)
    const personalSec =  personalSecurity(personal)
    const object = new Users ({
        name,
        email,
        personal: personalSec,
        prefer: preferOG,
        pwd,
        phone,
    })
    return object
}

export async function scrapingOG(prefer){
    const page = await axios.get(prefer)
    const $ = cheerio.load(page.data)
    const result = [];
    $('meta').each((index, el)=>{
        if ($(el).attr("property")) {
            const key = $(el).attr("property").split(":")[1]
            const value = $(el).attr("content")
            result[index]={key, value}
        }
    })
    return result
}

export function personalSecurity(personal){
    const personalArray=personal.split("-")
    return `${personalArray[0]}-${"".padStart(personalArray[1].length,"*")}`
}

// await mongoose.connect("mongodb://localhost:27017/myproject")