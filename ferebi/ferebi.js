document.querySelector('.box1').style.backgroundColor ='blue'
document.querySelector('.box2').style.backgroundColor ='red'
document.querySelector('.box3').style.backgroundColor ='green'
document.querySelector('.box4').style.backgroundColor ='grey'
document.querySelector('.box5').style.backgroundColor ='orange'
document.querySelector('.box6').style.backgroundColor ='violet'
document.querySelector('.box7').style.backgroundColor ='yellow'
document.querySelector('.box8').style.backgroundColor ='aquamarine'
document.querySelector('.box9').style.backgroundColor ='purple'

let color1, color2, color3;
document.querySelector('.box1').addEventListener('click', function(){
  color1 = document.querySelector('.box1').style.backgroundColor
})
document.querySelector('.box2').addEventListener('click', function(){
  color1 = document.querySelector('.box2').style.backgroundColor
})
document.querySelector('.box3').addEventListener('click', function(){
  color1 = document.querySelector('.box3').style.backgroundColor
})
document.querySelector('.box4').addEventListener('click', function(){
  color2 = document.querySelector('.box4').style.backgroundColor
})
document.querySelector('.box5').addEventListener('click', function(){
  color2 = document.querySelector('.box5').style.backgroundColor
})
document.querySelector('.box6').addEventListener('click', function(){
  color2 = document.querySelector('.box6').style.backgroundColor
})
document.querySelector('.box7').addEventListener('click', function(){
  color3 = document.querySelector('.box7').style.backgroundColor
})
document.querySelector('.box8').addEventListener('click', function(){
  color3 = document.querySelector('.box8').style.backgroundColor
})
document.querySelector('.box9').addEventListener('click', function(){
  color3 = document.querySelector('.box9').style.backgroundColor
})
document.getElementById('add').addEventListener('click', function(){
  document.querySelector('.box10').style.backgroundColor = color1
  document.querySelector('.box11').style.backgroundColor = color2
  document.querySelector('.box12').style.backgroundColor = color3
})

