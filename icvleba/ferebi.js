for(let i = 1; i < 21; i++){
    document.getElementById(`div${i}`).style.backgroundColor = 'grey'
}


document.getElementById('button').addEventListener('click', () =>{
    setInterval(ferebi, 100);
})


function ferebi(){
    let x = Math.floor((Math.random()*20) + 1);
   if(document.getElementById(`div${x}`).style.backgroundColor == 'grey'){
    document.getElementById(`div${x}`).style.backgroundColor = 'blue'
   }
   else if(document.getElementById(`div${x}`).style.backgroundColor == 'blue'){
    document.getElementById(`div${x}`).style.backgroundColor = 'green'
   }
   else if(document.getElementById(`div${x}`).style.backgroundColor == 'green'){
    document.getElementById(`div${x}`).style.backgroundColor = 'grey'
   }
}



 