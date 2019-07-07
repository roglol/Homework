const button = document.querySelector('.fa-align-justify')  // button for showing sidebar
const hide = document.querySelector('.fa-times') //button for hiding sidebar
const formButton = document.querySelector('.form-button') // button for displaying submit form
const container = document.querySelector('.container') // sidebar 
const submitForm = document.querySelector('.form-submit') // submit form
const form = document.querySelector('.form') // div element where the button for displaying submit form is placed
const burger = document.querySelector('.fa-bars') // button for displaying burger menu
const nav = document.querySelector('nav') // navigation element
const x = document.querySelector('.fa-times-circle') // button for removing burger menu
const buttons = document.querySelectorAll('.button') // selecting all butons inside navigation component

// showing sidebar
button.addEventListener('click', () => {
    container.classList.add('show')
    button.style.display = "none"
})
// hiding sidebar
hide.addEventListener('click', () => {
    container.classList.remove('show')
    button.style.display = "block"
})
// adding click events to all buttons in the navigation component
nav.addEventListener('click', (e)=>{
    // checking whether the target is a button
    if(e.target.tagName.toLowerCase() === "button"){
        // selecting active button and li elements
        let activeButton = document.querySelector('.active-button')
        let activLi = document.querySelector('.active-li')
        // remvoing classes from previous current button and li elements
        activeButton.classList.remove('active-button')
        activLi.classList.remove('active-li')
        //adding active classes to the current button and li elements
        e.target.classList.add('active-button')
        e.target.closest('li').classList.add('active-li')
        //selecting visible paragraph
        let visibleParagraph = document.querySelector('.showParagraph')
        //removing showParagraph class from the previously shown paragraph
        visibleParagraph.classList.remove('showParagraph')
        visibleParagraph.classList.add('hideParagraph')
        // shhowing new paragraph according to the id of the button(the button and the paragraph have the same id)
        let id = e.target.id
        let newParagraph = document.querySelector(`.${id}`)
        newParagraph.classList.remove('hideParagraph')
        newParagraph.classList.add('showParagraph')
    }
})
//showing submit form
formButton.addEventListener('click', () => {
    submitForm.classList.remove('hide-form')
    submitForm.classList.add('show-form')
    form.classList.add('hide-form')
})
//showing navigation component
burger.addEventListener('click', () => {
    nav.style.display = "block"
    burger.style.display = "none"
    x.style.display = "block"
})
//removing navigation component
x.addEventListener('click', () => {
    nav.style.display = "none"
    burger.style.display = "block"
    x.style.display = "none"
})