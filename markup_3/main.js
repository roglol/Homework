const addNew = document.querySelector('.article-left--footer__button img')
const paymentForm = document.querySelector('.payment-form')
const removeForm = document.querySelector('.close-button')
const paymentFormButton = document.querySelector('.payment--form__button')
const cardNumber = document.querySelector('.card-number')
const cardMonth = document.querySelector('.card-month')
const cardYear = document.querySelector('.card-year')
const cardCvv = document.querySelector('.card-cvv')
const visa = document.querySelector('.hide-card')
const paymentWarning = document.querySelector('.payment-warning')
const main = document.querySelector('main')
const backDrop = document.querySelector('.backdrop')
const cards = document.querySelectorAll('.card')
const menuItems = document.querySelectorAll('aside nav ul li')
const burger = document.querySelector('.fa-bars')
const aside = document.querySelector('aside')
const del = document.querySelector('.fa-times-circle')

addNew.addEventListener('click' , ()=>{
    backDrop.classList.remove('hide')
    paymentForm.classList.remove('hideForm')

})


removeForm.addEventListener('click', () => {
    paymentForm.classList.add('hideForm')
    backDrop.classList.add('hide')
})



menuItems.forEach( el=>{
   el.addEventListener('click', (e)=>{
       const active = document.querySelector('.active-li')
       active.classList.remove('active-li')
       e.target.classList.add('active-li')
   })
})

burger.addEventListener('click', ()=>{
    aside.classList.remove('hideAside')
    aside.classList.add('showAside')
     backDrop.classList.remove('hide')
     burger.classList.remove('showBurger')
     burger.classList.add('hideBurger')
    del.classList.remove('hideDelete')
    del.classList.add('showDelete')
})

del.addEventListener('click', ()=>{
    backDrop.classList.add('hide')
    aside.classList.remove('showAside')
    aside.classList.add('hideAside')
    burger.classList.remove('hideBurger')
    burger.classList.add('showBurger')
    del.classList.remove('showDelete')
    del.classList.add('hideDelete')
})


cardNumber.addEventListener('input', (e) => {
    let arr =  e.target.value.split('').filter(el => el !== ' ')
    let val = []
    for(let i = 0; i < arr.length; i++){
        let counter = i + 1
        val.push(arr[i])
        if( counter % 4 == 0 && counter !== 16){
            val.push(' ')
        }
       
    }
    e.target.value = val.join('')
     if(cardNumber.value.length == 19 ){
          visa.classList.remove('hide-card')
          cardNumber.classList.add('checked')
              checkInputs()
      } 
  })


  cardNumber.onkeydown = function (e) {
      var key = event.keyCode || event.charCode;
      if (key == 8 || key == 46) {
          e.preventDefault();
          if (e.target.value.length) {
              e.target.value = e.target.value.substr(0, e.target.value.length - 1)
          }
          if(cardNumber.value.length !== 19){
              visa.classList.add('hide-card')
              cardNumber.classList.remove('checked')
              checkInputs()
          }
      }
};

cardMonth.addEventListener('input', (e)=>{
  if(e.target.value > 12 || e.target.value.length < 2 || isNaN(e.target.value)){
      cardMonth.classList.remove('checked')
      checkInputs()
  }else{
      cardMonth.classList.add('checked')
      checkInputs()
  }
})
cardYear.addEventListener('input', (e)=>{
  if(e.target.value < 19 || e.target.value.length < 2 || isNaN(e.target.value)){
      cardYear.classList.remove('checked')
      checkInputs()
  }else{
      cardYear.classList.add('checked')
      checkInputs()
  }
})
cardCvv.addEventListener('input', (e)=>{
  if(e.target.value.length !== 3 || isNaN(e.target.value)){
    cardCvv.classList.remove('checked')
    checkInputs()
  }else{
    cardCvv.classList.add('checked')
    checkInputs()
  }
})




  paymentFormButton.addEventListener('click', (e) => {
      e.preventDefault()
      let card = '1234 1234 1234 1234'
      if(cardNumber.value !== card){
          paymentWarning.classList.remove('hide-warning')
          cardNumber.style.borderBottom = '1px solid #ff0063'
          cardNumber.style.color = '#ff0063'
      }else{
          paymentForm.classList.remove('showForm')
          paymentForm.classList.add('hideForm')
      }
    
  })


function checkInputs(){
  if(cardNumber.classList.contains('checked')&&
  cardMonth.classList.contains('checked')&&
  cardYear.classList.contains('checked')&&
  cardCvv.classList.contains('checked')){
      paymentFormButton.removeAttribute("disabled")
      paymentFormButton.classList.add('enable-button')
  }else{
      paymentFormButton.classList.remove('enable-button')
      paymentFormButton.setAttribute("disabled", "true")
  }
}


