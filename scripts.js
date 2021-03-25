const form = document.getElementById("form")
const small = document.querySelector("small")
const input = document.getElementById("email")

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex.test(email)
}

function errorMessage(e) {
    const email = form.email.value
    
    if(!validateEmail(email) || email == ""){
        input.classList.add('error') 
        small.classList.add('error')
        e.preventDefault()
    }

    setTimeout(() => {
        input.classList.remove('error')
        small.classList.remove('error')
    }, 3000)
}

form.addEventListener('submit', errorMessage)