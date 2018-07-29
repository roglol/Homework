function calendar(elem, year, month){
    let table = document.getElementById(`${elem}`)
    let a = table.children[0]
    let b = table.children[1]
    let c = document.querySelectorAll('.mokled')
    let date = new Date(year,month,0).getDate()
let date1 = new Date(year, month - 1)
let firstDay = new Date(date1.getFullYear(), date1.getMonth(), 1).toDateString().split(' ')
let firstDay1 = firstDay[0]
let j = 1;
for(i=0; i < a.children.length; i++){
    if(firstDay1 != a.children[i].textContent && parseInt(a.children[i].innerHTML) < 1){
        b.children[i].innerHTML = ' '
    }
    if(firstDay1 == a.children[i].textContent){
        b.children[i].innerHTML = 1
      for(k = i; k < a.children.length; k++ ){
       b.children[k].innerHTML = j;
       j++
      }
    }
}
for(i=0; i < c.length; i++){
    c[i].innerHTML = j;
    j++
    if(parseInt(c[i].innerHTML) > +date){
        c[i].innerHTML = ' '
    }
}
}
calendar('table', 2018, 9)
