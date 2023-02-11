import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: String,
    img: String,
})

export const StarBucks = mongoose.model('starbucks',Schema)

export async function MongoDB_Starbucks({name, img}){
    const starbucksBoard = new StarBucks({
        name: name,
        img: img,
    })
    return starbucksBoard
}

// await mongoose.connect("mongodb://localhost:27017/myproject")