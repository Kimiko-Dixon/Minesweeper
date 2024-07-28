/* class Tile{
    constructor(){
        this.revealed = false
    }
} */
class Mine{
    constructor(){
        this.revealed = false
        this.image = ''
    }
}
class Num{
    constructor(){
        this.revealed = false
        this.number = 0
    }
}

module.exports = {Mine,Num}