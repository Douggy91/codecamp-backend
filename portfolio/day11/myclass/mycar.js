export class Car{
    constructor(sort, horseP, color){
        this.sort = sort
        this.horseP = horseP
        this.color = color
    }
    go=()=>{
        console.log('출발~')
    }
    stop=()=>{
        console.log('멈춰!')
    }
}