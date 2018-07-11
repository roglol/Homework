let date = new Date(2018, 3, 28);
let add = document.getElementById("add");
// add buttton addEventListener
add.addEventListener('click',function generateHTML(){
    let parentselector = document.getElementById('section');
    let tagname = document.createElement('div');
    parentselector.appendChild(tagname);
    tagname.className = "tagname";
    // creating first div element in each column with class number0
    let childelement1 = document.createElement('div')
    childelement1.className = 'number0'
    tagname.appendChild(childelement1)
    childelement1.textContent = FormattedDate() //adding date to the firstchild
    // appending date to the number0 class for each day
    
      // creating 15 divs along with firstchild div
       for(k = 1; k < 16; k++){
        let  childelement = document.createElement('div');
         tagname.appendChild(childelement);
         childelement.className = "number";
         childelement.classList.add(`number${k}`)
         childelement.style.backgroundColor ='red'
         let text = document.createTextNode('0')
         childelement.appendChild(text) 
    }
    tagname.firstElementChild.style.backgroundColor = 'green'
   //calling prompt function for each box 
   box();
   
})
// date function
function FormattedDate() {
if(date.getDay() == '1' || date.getDay() == '3' ||date.getDay() == '6' ) {
  date = new Date(date.getTime() + 2*(24*60*60*1000))
  let ModDate = date.toString();
  let SplitDate = ModDate.split(" ");
  return `${SplitDate[0]} ${SplitDate[1]} ${SplitDate[2]}  `
}
  else  if(date.getDay() == '5'){
    date = new Date(date.getTime() + (24*60*60*1000))
    let ModDate = date.toString();
  let SplitDate = ModDate.split(" ");
  return `${SplitDate[0]} ${SplitDate[1]} ${SplitDate[2]}  `
  }
}
  
function event(x){
  let input = prompt("enter");
  if(input > 5){
    x.target.textContent = 5 
  }
  else if(input <= 0){
    x.target.textContent = 0;
  }
  else{
    x.target.textContent = input;
    // console.log(input);
    }
  if(x.target.textContent == "0"){
    x.target.style.backgroundColor = "red";
  }
  else{
    x.target.style.backgroundColor = "green";
  }     
}
function box(){

let n = document.getElementsByClassName("number")  
for (let i = 0; i < n.length; i++){
    n[i].addEventListener("click", event)
}
}

// creating remove button
let remove = document.getElementById("remove");
remove.addEventListener('click', function remove() {
        let elem = document.getElementsByClassName("tagname")
        elem[elem.length-1].remove();
// removing last added date        
if(date.getDay() == '1' || date.getDay() == '3' || date.getDay() == '5') {
  date.setDate(date.getDate()-2);

}
   else if(date.getDay() == '6'){
     date.setDate(date.getDate()-1);
  
 }
         
    
   })
// creating update button
   let update = document.getElementById("update");
   update.addEventListener('click',function update(){
    let n = document.getElementsByClassName('update')
       for(i=0; i<n.length; i++) {
           if(n[i].firstChild){
               n[i].removeChild(n[i].firstChild)
           }
        }
// the number of students
       let x = document.getElementsByClassName('name')
       let y = x.length
       let text = document.createTextNode(y)
       let total = document.getElementById('total')
       total.appendChild(text)
       
// the number of added days
       let h = document.getElementsByClassName('number1')
       let l = h.length
       let texti = document.createTextNode(l)
       let days = document.getElementById('days')
       days.appendChild(texti)
//the number of missed lessons
    let red = document.getElementsByClassName('number')
       let sum = 0
       for(i=0; i < red.length; i++){
      if(red[i].textContent <= 0){
          sum = sum + 1
      }
    }
    
      let textnode =document.createTextNode(sum)
      let miss = document.getElementById('missed')
      miss.appendChild(textnode)

 // calculating average of each row and saving the results to an array     
      let arr = [];
for (i = 1; i <= 15; i++) {
   let innerSum = Array.from(
    document.getElementsByClassName(`number${i}`)
  ).reduce(
    (acc, el) => acc + parseFloat(el.innerText),
    0
  );

  arr.push(innerSum);
}
 // appending average value of each row to the corresponding cell   
let average = document.getElementsByClassName('average')
for(i=0; i<average.length; i++) {
  if(average[i].firstChild){
      average[i].removeChild(average[i].firstChild)
  }
}
for(i=0; i<15; i++) {
  average[i].appendChild(document.createTextNode((parseFloat(arr[i])/h.length).toFixed(2)))
}
// average mark  of all avrages of student marks
let av = document.getElementById('averages')
let inner = Array.from(
  document.getElementsByClassName('average')
).reduce(
  (acc, el) => acc + parseFloat(el.innerText),
  0
)
av.appendChild(document.createTextNode(parseFloat(inner/15).toFixed(2)))
})



