let container = document.getElementById('container')
let arr = []
for(i=1; i<=150; i++){
    let div = document.createElement('div')
    container.appendChild(div)
    div.innerHTML = i 
    arr.push(i)
}

document.getElementById('button2').addEventListener('click', function(){
    arr.sort( (a,b) =>{
        return a -b 
    })
    for(i=0; i<arr.length; i++){
        container.children[i].innerHTML = arr[i]
    }
    
})

document.getElementById('button3').addEventListener('click', function(){
    arr.sort( (a,b) =>{
        return b-a
    })
    for(i=0; i<arr.length; i++){
        container.children[i].innerHTML = arr[i]
    }
    
})

document.getElementById('button1').addEventListener('click', function(){
    for (let i = arr.length -1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        container.children[i].innerHTML = arr[i]

    }
})

container.addEventListener('click', function(event){
    if(event.target.className != 'container'){
       event.target.remove()
       let index = arr.indexOf(parseInt(event.target.innerHTML));
        if (index > -1) {
         arr.splice(index, 1);
        }
}


})

