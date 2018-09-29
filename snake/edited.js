let menu,timer,canvas,ctx, canvasWidth,canvasHeight,food,snake
const STORAGE_KEY = 'settings'
let storage = window.localStorage
let level = document.querySelector('select')
let speed = document.querySelector('.speed')
let length = document.querySelector('.length')
let width = document.querySelector('.width')
let box = document.querySelector('.height')
let apples = document.querySelector('.apples')
let button = document.querySelector('button')
let startGame = document.querySelector('.burgerSvg')
let nav =document.querySelector('nav')
let direction = 99
let x = 200
const height = 20 
let snakeLength = 10
let foodLength = 1
let snakeSpeed = 10
let eaten = true;
let finish = false;
//menu class
class Menu {
    constructor(){
       this.level = 'Intermediate'
       this.snakeSpeed = 10
       this.snakeLength = 10
       this.boardWidth = 600
       this.boardHeight = 400
       this.appleCount = 1
       this.maxScore = 0
    }
}
//apple class
class Apple{
    constructor(topLeftX, topLeftY){
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
    }
    created(){
    ctx.fillStyle = 'purple'
    ctx.fillRect(this.topLeftX, this.topLeftY, height, height)
        }
}
//food class
class Food{
    constructor(){
       this.arr = []
    }
    create(){
        for(let i = 0; i < this.arr.length; i++){
             this.arr[i].created()
        }
     }
     init(){
        for(let i = 0; i < foodLength; i++){
            let a = Math.floor(Math.random() * (canvasWidth /height)) * height
            let b = Math.floor(Math.random() * (canvasHeight /height)) * height
            let applei = new Apple(a,b)
            this.arr.push(applei)
     }
    }

    delete(){
        this.arr.length = 0;
    }
   
}

//snakebody class
class SnakeBody {
    constructor(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
      this.topLeftX = topLeftX;
      this.topLeftY = topLeftY;
      this.boxWidth = boxWidth;
      this.boxHeight = boxHeight;
      this.fillColor = fillColor
    }
    created(){
    ctx.fillStyle = this.fillColor
    ctx.fillRect(this.topLeftX, this.topLeftY, this.boxWidth, this.boxHeight)
    }
  }
  //snake calsss
class Snake {
    constructor(){
       this.arr = []
       this.length = snakeLength
       this.score = 0
    }
    create(){
       for(let i = 0; i < this.arr.length; i++){
            this.arr[i].created()
       }
    }
    init(){
        for(let i = 0; i <this.length; i++){
            let snakei = new SnakeBody(x,x-height * i,height, height,'#006400')
            this.arr.push(snakei)
       }
    }
    delete(){
        this.arr.length = 0
    }
}
//creating game objects
function init(){
food = new Food()
snake = new Snake()
if(storage.getItem(STORAGE_KEY) !== null){
    getStorage()
}else{
    menu = new Menu()
}
}
init()

 window.onload = function() {
canvas = document.getElementById('myCanvas');
canvasWidth = canvas.width
canvasHeight = canvas.height
ctx = canvas.getContext('2d');
canvas.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    if(finish){
        nav.style.display = 'flex'
        nav.style.flexDirection = 'row'
       button.style.display = 'inline-block'
       canvas.style.border = 'none'
    }
})
window.addEventListener('keydown', move)
};
 
function animate() {
    gameOver();
     update();
     draw();
     if(finish){
        clearInterval(timer)
    }
} 
function update(){
    if(finish){
        return;
    }
    for(let i = snake.arr.length-1; i>=0; i--){
          if(direction ==0){
              if(i==0){
                  snake.arr[i].topLeftX = snake.arr[i].topLeftX - height
              }
              else{
        snake.arr[i].topLeftX = snake.arr[i-1].topLeftX
        snake.arr[i].topLeftY = snake.arr[i-1].topLeftY
              }
          }
          else if(direction ==1){
            if(i==0){
                snake.arr[i].topLeftY = snake.arr[i].topLeftY - height
            }
            else{
      snake.arr[i].topLeftX = snake.arr[i-1].topLeftX
      snake.arr[i].topLeftY = snake.arr[i-1].topLeftY
            }
          }
          else if(direction==2){
            if(i==0){
                snake.arr[i].topLeftX = snake.arr[i].topLeftX + height
            }
            else{
      snake.arr[i].topLeftX = snake.arr[i-1].topLeftX
      snake.arr[i].topLeftY = snake.arr[i-1].topLeftY
            }
          }
          else if(direction==3){
            if(i==0){
                snake.arr[i].topLeftY = snake.arr[i].topLeftY  + height
            }
            else{
      snake.arr[i].topLeftX = snake.arr[i-1].topLeftX
      snake.arr[i].topLeftY = snake.arr[i-1].topLeftY
            }
          }

    }
}
function draw() {
    // clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //end the fucking game
    if(finish){
        ctx.fillStyle = 'white'
        ctx.font="20px Georgia";
        ctx.fillText("click to continue",2.5*canvasWidth/6,canvasHeight/3)
        ctx.fillText(`Your Score:${snake.score}`,2.5*canvasWidth/6, canvasHeight/3+50)
         return
    }
    //draw snake
    snake.create()
    //draw food
    while(eaten){
        food.init()
        eaten = false
    }
    food.create()
    //in the case of the collision
    for(let i = 0; i <foodLength; i++){
        if(testCollision(snake.arr[0], food.arr[i])){
            if(i=foodLength){
                food.delete()
            }
            eaten = true;
            let new_X, new_Y
            if(direction ==0){
                new_X = snake.arr[0].topLeftX - height
                new_Y = snake.arr[0].topLeftY 
            }
           else if(direction ==1){
                new_X = snake.arr[0].topLeftX 
                new_Y = snake.arr[0].topLeftY  - height
            }
            else if(direction ==2){
                new_X = snake.arr[0].topLeftX + height
                new_Y = snake.arr[0].topLeftY 
            }
           else  if(direction ==3){
                new_X = snake.arr[0].topLeftX 
                new_Y = snake.arr[0].topLeftY + height
            }
            snake.arr.unshift(new SnakeBody(new_X, new_Y,height, height,'#006400'))
            snake.length++
            snake.score += 10
            menu.snakeLength++
            updateStorage()
    }
    }
}


//check wether snake head touches the apple
function testCollision(rect1, rect2){
if(rect1.topLeftX == rect2.topLeftX && rect1.topLeftY == rect2.topLeftY){
         return true
    }

}

//move the snake with arrow keys
function move(evt){
    let key = evt.keyCode
    if(key ==37 && direction != 2){
              direction = 0
      }else if(key == 38 && direction != 3){
                 direction = 1
      }else if(key ==39 && direction != 0){
               direction = 2
      }else if(key == 40 && direction != 1){
               direction =3
        }
}


//all gameover conditions
function gameOver(){
    for(let i = 0; i < snake.arr.length; i++){
        if( i == 0){
            continue;
        }
        if((Math.abs(snake.arr[0].topLeftX - snake.arr[i].topLeftX)< height) &&
           (Math.abs(snake.arr[0].topLeftY - snake.arr[i].topLeftY)< height) ){
            finish = true
        }
    }
    if(snake.arr[0].topLeftX == canvasWidth ){
        finish = true
   }
   if(snake.arr[0].topLeftX < 0 ){
     finish = true
  }
   if(snake.arr[0].topLeftY == canvasHeight){
    finish = true
  }
 if(snake.arr[0].topLeftY < 0){
    finish = true
  }
  if(finish){
      menu.snakeLength = 10
      if(snake.score > menu.maxScore){
          menu.maxScore = snake.score
      }
      updateStorage()
  }
}

//restart the game on mouse click
function handleMouseClick () {
    canvas.style.border = '3px black solid'
    nav.style.display= 'none'
    button.style.display = 'none'
    finish = true
    eaten = true
     if(finish) {
         //assign storage data to menu object properties for later use
        canvas.width = menu.boardWidth
        canvasWidth = canvas.width
        canvas.height = menu.boardHeight
        canvasHeight = canvas.height
        snake.length = menu.snakeLength
        snakeSpeed = menu.snakeSpeed
        foodLength = menu.appleCount
        //reinitializing snake and food
        food.delete()
        snake.delete()
        snake.init()
        snake.create()
        //reseting score and direction variables
        snake.score = 0
        direction = 3;
        // var timeleft = 3;
        // var downloadTimer = setInterval(function(){
        // timeleft--;
        // ctx.fillStyle = 'white'
        // ctx.fillText(`Your Score:${timeleft}`,200, 200)
        // document.getElementById("countdowntimer").textContent = timeleft;
        // if(timeleft <= 0)
        //     clearInterval(downloadTimer);
        //     finish = false
        //     timer = setInterval(animate, 1000/snakeSpeed)
        // },1000);
        // setTimeout(() => {
        //     finish = false
        // }, 2000);
        //restaring game and resetting interval on timer variable
        finish = false
        timer = setInterval(animate, 1000/snakeSpeed)
    }
}


//eventlisteners for menu inputs
length.addEventListener('input', ()=>{
    menu.snakeLength = length.value
    updateStorage()
})
speed.addEventListener('input', ()=>{
    menu.snakeSpeed =  parseInt(speed.value)
    updateStorage()
})
width.addEventListener('input', ()=>{
    menu.boardWidth = width.value
    updateStorage()
})
box.addEventListener('input', ()=>{
    menu.boardHeight = box.value
    updateStorage()
})
apples.addEventListener('input', ()=>{
    menu.appleCount = parseInt(apples.value)
    foodLength = menu.appleCount
    updateStorage()
})
level.addEventListener('change', ()=>{
    if(level.value == 'Novice'){
        menu.snakeSpeed = 10
    }
    if(level.value == 'Intermediate'){
        menu.snakeSpeed = 20
    }
    if(level.value == 'Hard'){
        menu.snakeSpeed = 30
    }
    updateStorage()
})

button.addEventListener('click', handleMouseClick)

//saveing data into storage
function updateStorage(){   
    storage.setItem(STORAGE_KEY, JSON.stringify(menu));  
}


//getting data from storage
function getStorage(){
    menu = JSON.parse(storage.getItem(STORAGE_KEY));
}




















