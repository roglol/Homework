function create(){
    let vaime = document.querySelector('.container')
    for(i=0; i<6; i++){
        for(k=0; k<6; k++){
      let vaime1 =document.createElement('div')
      vaime.appendChild(vaime1)
      if( i == 2 || i==3){
          vaime1.style.backgroundColor = 'red'
      }
      if( k ==  2|| k==3){
        vaime1.style.backgroundColor = 'yellow'
    }
    if( i ==  2 && k==2){
        vaime1.style.backgroundColor = 'red'
    }
    if( i ==  3 && k==3){
        vaime1.style.backgroundColor = 'red'
    }
      
        
    }
}
}
create()