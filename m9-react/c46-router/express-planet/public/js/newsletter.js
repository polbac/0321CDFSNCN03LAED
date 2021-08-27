const newsletterForm = document.querySelector('.newsletter')
const newsletterEmail = document.querySelector('.newsletter input')
const success = document.querySelector('.newsletter .success')
const error = document.querySelector('.newsletter .error')

const NEWSLETTER_API_URL = 'http://localhost:3000/api/newsletter'

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

newsletterForm.addEventListener('submit', e => {
    error.innerHTML = ""
    success.style.display = "none"


    const email = newsletterEmail.value
    

    if (!validateEmail(email)) {
        error.innerHTML = "Por favor ingresá un e-mail"
    }

    // enviar por POST
    fetch(NEWSLETTER_API_URL, {
        method: 'POST',
        body: JSON.stringify({
            email
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                success.style.display = "block"
            } else if(res.error === 'user_exists') {
                error.innerHTML = "Este email ya está registrado"
            }
        })

    e.preventDefault()
})