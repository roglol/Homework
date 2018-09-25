let direction = 99
const height = 10
let eaten = true;
let vsio = false;
let interval
class Apple{
    constructor(topLeftX, topLeftY, boxWidth, boxHeight, fillColor){
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
class Food{
    constructor(){
       this.arr = []
       this.length = 1
    }
    create(){
        for(let i = 0; i < this.arr.length; i++){
             this.arr[i].created()
        }
     }
     init(){
        for(let i = 0; i < this.length; i++){
            let applei = new Apple(Math.random() * 380 +5,Math.random() * 380 + 5,20,20,'black')
            this.arr.push(applei)
     }
    }
}
let food = new Food()
 console.log(food.arr)

class Snake {
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
class Snaka {
    constructor(){
       this.arr = []
       this.length = 3
    }
    create(){
       for(let i = 0; i < this.arr.length; i++){
            this.arr[i].created()
       }
    }
    init(){
        for(let i = 0; i < this.length; i++){
            let snakei = new Snake(100,x-height * i,20,2 * height,'red')
            this.arr.push(snakei)
       }
    }
}
let x = 100

let snaka = new Snaka()
snaka.init()

let canvas, ctx, canvasWidth, canvasHeight;
function handleMouseClick () {
    if(vsio) {
        vsio = false;
        console.log(vsio)
    }
}
window.requestAnimFrame = function() {
		return window.requestAnimationFrame || 
					   window.webkitRequestAnimationFrame || 
					   window.mozRequestAnimationFrame || 
					   window.oRequestAnimationFrame || 
					   window.msRequestAnimationFrame ||
					   function(callback) {
						interval = window.setTimeout(callback, 1000 / 60);
                       };
                    }();
			
			window.onload = function() {
				canvas = document.getElementById('myCanvas');
				canvasWidth = canvas.width;
                canvasHeight = canvas.height;
                ctx = canvas.getContext('2d');
                canvas.addEventListener('mousedown', handleMouseClick)
                window.addEventListener('keydown', move)
                animate();
                // draw()
                
                // snake.create()
                // snaka.arr.push(snake)
                // console.log(snaka)
            };
            
function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor){
    ctx.fillStyle = fillColor
    ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight)
}    
function animate() {
    gameOver();
     update();
     draw();
    requestAnimFrame(animate);
} 
function update(){
    if(vsio){
        return;
    }
    for(let i = snaka.arr.length-1; i>=0; i--){
          if(direction ==0){
              if(i==0){
                  snaka.arr[i].topLeftX = snaka.arr[i].topLeftX - 5
              }
              else{
        snaka.arr[i].topLeftX = snaka.arr[i-1].topLeftX
        snaka.arr[i].topLeftY = snaka.arr[i-1].topLeftY
              }
          }
          else if(direction ==1){
            if(i==0){
                snaka.arr[i].topLeftY = snaka.arr[i].topLeftY - 5
            }
            else{
      snaka.arr[i].topLeftX = snaka.arr[i-1].topLeftX
      snaka.arr[i].topLeftY = snaka.arr[i-1].topLeftY
            }
          }
          else if(direction==2){
            if(i==0){
                snaka.arr[i].topLeftX = snaka.arr[i].topLeftX + 5
            }
            else{
      snaka.arr[i].topLeftX = snaka.arr[i-1].topLeftX
      snaka.arr[i].topLeftY = snaka.arr[i-1].topLeftY
            }
          }
          else if(direction==3){
            if(i==0){
                snaka.arr[i].topLeftY = snaka.arr[i].topLeftY  + 5
            }
            else{
      snaka.arr[i].topLeftX = snaka.arr[i-1].topLeftX
      snaka.arr[i].topLeftY = snaka.arr[i-1].topLeftY
            }
          }

    }
}
function testCollision(rect1, rect2){
      return((rect1.topLeftX <=rect2.topLeftX + 20) &&
            (rect2.topLeftX <=rect1.topLeftX + 20 ) &&
            (rect1.topLeftY <=rect2.topLeftY + 20) &&
            (rect2.topLeftY <=rect1.topLeftY + 20))
}
function draw() {
    // clear canvas
    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    //end the fucking game
    if(vsio){
        ctx.fillStyle = 'white'
        ctx.fillText("click to continue",200,200)
        return
    }
    //draw snake
    snaka.create()
    //draw food
    while(eaten){
        food.init()
        eaten = false
    }
    food.create()
    //in the case of the collision
    if(testCollision(snaka.arr[0], food.arr[0])){
            food.arr = []
            eaten = true;
            let new_X, new_Y
            if(direction ==0){
                new_X = snaka.arr[0].topLeftX - 20
                new_Y = snaka.arr[0].topLeftY 
            }
           else if(direction ==1){
                new_X = snaka.arr[0].topLeftX 
                new_Y = snaka.arr[0].topLeftY  - 20
            }
            else if(direction ==2){
                new_X = snaka.arr[0].topLeftX + 20
                new_Y = snaka.arr[0].topLeftY 
            }
           else  if(direction ==3){
                new_X = snaka.arr[0].topLeftX 
                new_Y = snaka.arr[0].topLeftY + 20
            }
            snaka.arr.unshift(new Snake(new_X, new_Y,20,2 * height,'red'))
            snaka.length++
    }
    
    
   


}

console.log(snaka)


function move(evt){
    // 0 - left 
    // 1 - up 
    // 2 - right 
    // 3 - down
    switch(evt.keyCode){
        case 37:
        direction = 0
        break;
        case 38:
        direction = 1
        break;
        case 39:
        direction = 2
        break;
        case 40:
        direction = 3
        break
    }
}



function gameOver(){
    // for(let i = 0; i < snaka.arr.length; i++){
    //     if( i == 0){
    //         continue;
    //     }
    //     if((snaka.arr[0].topLeftX <=snaka.arr[i].topLeftX + 20) &&
    //     (snaka.arr[0].topLeftX <=snaka.arr[i].topLeftX + 20 ) &&
    //     (snaka.arr[0].topLeftY <=snaka.arr[i].topLeftY + 20) &&
    //     (snaka.arr[0].topLeftY <=snaka.arr[i].topLeftY + 20)){
    //         vsio = true
    //     }
    // }
    if(snaka.arr[0].topLeftX > 400 ){
        vsio = true
   }
   if(snaka.arr[0].topLeftX < 0 ){
     vsio = true
  }
   if(snaka.arr[0].topLeftY > 400){
    vsio = true
  }
 if(snaka.arr[0].topLeftY < 0){
    vsio = true
  }
}




  




   	