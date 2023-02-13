export class StarbucksController { 
    constructor(starbucks){
        this.starbucks = starbucks
    }
    findCoffeeMenu= async (req,res)=>{
    const result = await this.starbucks.find()    
    res.send(result)
    }
}

// export class StarbucksController { 
//     findCoffeeMenu= async (req,res)=>{
//     const result = await StarBucks.find()    
//     res.send(result)
//     }
// }