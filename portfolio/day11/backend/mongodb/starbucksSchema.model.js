import mongoose from "mongoose";

export const starbucksSchema = new mongoose.Schema({
    name: String,
    image: String,
})

export const StarBucks = mongoose.model('starbucks',starbucksSchema)

// export function MongoDB_Starbucks(name, image){
//     const starbucksBoard = new StarBucks({
//         name: name,
//         image: image,
//     })
//     return starbucksBoard
// }

// await mongoose.connect("mongodb://localhost:27017/myproject")