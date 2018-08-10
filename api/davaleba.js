let users = []
const saveUsers = function(vaime){
    localStorage.setItem('users', JSON.stringify(vaime))
}
const getUsers = function(){
  users = JSON.parse(localStorage.getItem('users'))
}
const generateDom = function(usersList){
    document.body.innerHTML = usersList.map(function(user, index){
     return `<div>
            <h2>${user.name}<small> Id - ${user.id}</small> <small> ${user.address.city}</small></h2>
            <button onclick="edit(event)" type="button" id = 'button2' data-user-id = '${index}'>Edit</button>
            <button onclick="remove(event)" type="button" id = 'button1' data-user-id = '${index}'>Remove</button>
            </div>`
         }).join('')
}
const remove = function(event){
event.target.closest('div').remove()
 users.splice(+event.target.dataset.userId, 1)
 saveUsers(users)
 getUsers()
 generateDom(users)
}
const edit = function(event){
    getUsers()
    let x = prompt('enter name')
    let y = +prompt('enter id')
    let z = prompt('enter city')
    users[+event.target.dataset.userId].name = x
    users[+event.target.dataset.userId].id = y
    users[+event.target.dataset.userId].address.city = z
    saveUsers(users)
    generateDom(users)
}
if(localStorage.getItem('users') === null){
 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    if( response.status === 200){
        return response.json()
     }
})
.then(data => {
    saveUsers(data)
    getUsers()
    generateDom(users)
}).catch( error=>{
    console.log(error)
})
} else{
    getUsers()
    generateDom(users)
}








    