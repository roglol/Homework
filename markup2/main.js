window.onload = () => {
    const removeForm = document.querySelectorAll('.close-button')
    const loginForm = document.querySelector('.login-form')
    const registerForm = document.querySelector('.register-form')
    const registerButton = document.querySelector('.register-button')
    const registerHeader = document.querySelector('.register-header')
    const loginHeader = document.querySelector('.login-header')
    const loginButton = document.querySelector('.login--header__button')
    const signUp = document.querySelector('.register--form__button')
    const paymentForm = document.querySelector('.payment-form')
    const paymentFormButton = document.querySelector('.payment--form__button')
    const loginFormButton = document.querySelector('.login-button')
    const loginEmail = document.querySelector('.login-email')
    const loginPassword = document.querySelector('.login-password')
    const loginInfo = document.querySelector('.login-info > span')

    const registerFirstName = document.querySelector('.register-fname')
    const registerLastName = document.querySelector('.register-lname')
    const registerEmail = document.querySelector('.register-email')
    const registerNumber = document.querySelector('.register-number')
    const registerPassword = document.querySelector('.register-password')

    const cardNumber = document.querySelector('.card-number')
    const cardMonth = document.querySelector('.card-month')
    const cardYear = document.querySelector('.card-year')
    const cardCvv = document.querySelector('.card-cvv')
    const visa = document.querySelector('.hide-card')
    const paymentWarning = document.querySelector('.payment-warning')

    const lastSection = document.querySelector('.last-section')


    loginFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        let password = '123456'
        let email = loginEmail.value
        let userPassword = loginPassword.value
        if (password !== userPassword) {
            let warning = document.querySelector('.login-warning')
            let hr = document.querySelector('.login-info > hr')
            hr.classList.add('show-warning')
            loginInfo.classList.add('hide-warning')
            warning.classList.remove('hide-warning')
            warning.classList.add('show-warning')
        }
    })
    removeForm[0].addEventListener('click', () => {
        loginForm.classList.add('hideForm')
    })

    removeForm[1].addEventListener('click', () => {
        registerForm.classList.add('hideForm')
    })

    removeForm[2].addEventListener('click', () => {
        paymentForm.classList.add('hideForm')
    })
    removeForm[3].addEventListener('click', () => {
        lastSection.classList.add('hideForm')
    })
    registerButton.addEventListener('click', () => {
        loginForm.classList.add('hideForm')
        registerForm.classList.remove('hideForm')
        registerForm.classList.add('showForm')
        registerHeader.classList.add('hideForm')
        loginHeader.classList.remove('hideForm')
        loginHeader.classList.add('showForm')
    })

    loginButton.addEventListener('click', () => {
        loginHeader.classList.add('hideForm')
        registerForm.classList.remove('showForm')
        registerForm.classList.add('hideForm')
        loginForm.classList.remove('hideForm')
        loginForm.classList.add('showForm')
        registerHeader.classList.remove('hideForm')
        registerHeader.classList.add('showForm')
        paymentForm.classList.remove('showForm')
        paymentForm.classList.add('hideForm')
        lastSection.classList.remove('showForm')
        lastSection.classList.add('hideForm')
    })
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function allnumeric(inputtxt) {
        var numbers = /^[0-9]+$/;
        if (inputtxt.match(numbers)) {
            return true;
        } else {
            return false;
        }
    }

    signUp.addEventListener('click', (e) => {
        e.preventDefault()

        if (!registerFirstName.value) {
            registerFirstName.closest('div').querySelector('.register-warning').classList.remove('hide-warning')
            registerFirstName.style.borderBottom = '1px solid #ff0063'
        } else {
            registerFirstName.closest('div').querySelector('.register-warning').classList.add('hide-warning')
            registerFirstName.style.borderBottom = '1px solid #c8c8c8'
        }
        if (!registerLastName.value) {
            registerLastName.closest('div').querySelector('.register-warning').classList.remove('hide-warning')
            registerLastName.style.borderBottom = '1px solid #ff0063'
        } else {
            registerLastName.closest('div').querySelector('.register-warning').classList.add('hide-warning')
            registerLastName.style.borderBottom = '1px solid #c8c8c8'
        }
        if (!validateEmail(registerEmail.value)) {
            registerEmail.closest('div').querySelector('.register-warning').classList.remove('hide-warning')
            registerEmail.style.borderBottom = '1px solid #ff0063'
        } else {
            registerEmail.closest('div').querySelector('.register-warning').classList.add('hide-warning')
            registerEmail.style.borderBottom = '1px solid #c8c8c8'
        }
        if (!allnumeric(registerNumber.value)) {
            registerNumber.closest('div').querySelector('.register-warning').classList.remove('hide-warning')
            registerNumber.style.borderBottom = '1px solid #ff0063'
        } else {
            registerNumber.closest('div').querySelector('.register-warning').classList.add('hide-warning')
            registerNumber.style.borderBottom = '1px solid #c8c8c8'
        }
        if (registerPassword.value.length < 6) {
            registerPassword.closest('div').querySelector('.register-warning').classList.remove('hide-warning')
            registerPassword.style.borderBottom = '1px solid #ff0063'
        } else {
            registerPassword.closest('div').querySelector('.register-warning').classList.add('hide-warning')
            registerPassword.style.borderBottom = '1px solid #c8c8c8'
        }
        if (registerFirstName.value && registerLastName.value &&
            validateEmail(registerEmail.value) && allnumeric(registerNumber.value) &&
            registerPassword.value.length >= 6) {
            registerForm.classList.remove('showForm')
            registerForm.classList.add('hideForm')
            paymentForm.classList.remove('hideForm')
            paymentForm.classList.add('showForm')
        }
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
           lastSection.classList.remove('hideForm')
           lastSection.classList.add('showForm')
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


}