const {Mine,Num} = require('./tiles.js')
const mines = []
const nums = []
function difficulty(){
    //fix later: easy, med, hard, random number of mines based on dificulty
    let difficultyNum = 10;
    //switch()
    while(difficultyNum != 0){
        mines.push(new Mine)
        difficultyNum--
    }
}

const grid = 
[
    ['a1','a2','a3','a4','a5','a6','a7','a8','a9'],
    ['b1','b2','b3','b4','b5','b6','b7','b8','b9'],
    ['c1','c2','c3','c4','c5','c6','c7','c8','c9'],
    ['d1','d2','d3','d4','d5','d6','d7','d8','d9'],
    ['e1','e2','e3','e4','e5','e6','e7','e8','e9'],
    ['f1','f2','f3','f4','f5','f6','f7','f8','f9'],
    ['g1','g2','g3','g4','g5','g6','g7','g8','g9'],
    ['h1','h2','h3','h4','h5','h6','h7','h8','h9'],
    ['i1','i2','i3','i4','i5','i6','i7','i8','i9'],
]

/* const grid = 
[
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    
] */
function generateTiles(){
    mines.forEach(mine => {
        const randRow = Math.floor(Math.random()*9)
        // const randtile = grid[randRow][Math.floor(Math.random()*9)]
        // console.log(randtile)
        grid[randRow].splice(Math.floor(Math.random()*9),1,mine)
    })
    // console.log(grid)

    /* grid.forEach(row =>{
        // const notMine = row.filter(tile => typeof tile === 'object')
        const notMine = row.filter(tile => tile instanceof Mine)
        console.log(notMine)
    }) */
    grid.forEach(row => {
        row.forEach(tile => {
            if (!(tile instanceof Mine)) {
                const numTile = new Num
                row.splice(row.indexOf(tile), 1, numTile)
                nums.push(numTile)
            }
        }
        ) 
        
    })


    console.log(grid)
   

}
difficulty()
generateTiles()
function genNum(surroundingTiles){
    let number = 0
    surroundingTiles.forEach(tile => {
        if(tile === Mine){
            number++
        }
    });
    return number
}
function endGame(){

}