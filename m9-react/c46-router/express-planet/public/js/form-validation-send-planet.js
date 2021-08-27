const form = document.querySelector("#form-create")

// los inputs
const inputName = form.querySelector('#name')
const inputDiameter = form.querySelector('#diameter')
const inputDiscovered = form.querySelector('#discovered')
const inputGalaxy = form.querySelector('#galaxy')
const inputImage = form.querySelector('#image')

// los mensajes de error
const errorName = form.querySelector('.msg-error-name')
const errorDiameter = form.querySelector('.msg-error-diameter')
const errorDiscovered = form.querySelector('.msg-error-discovered')
const errorGalaxy = form.querySelector('.msg-error-galaxy')
const errorImage = form.querySelector('.msg-error-image')


const inputArray = [
    inputName, inputDiameter, inputDiscovered, inputGalaxy, inputImage
] 

const msgErrorsArray = [
    errorName, errorDiameter, errorDiscovered, errorGalaxy, errorImage
] 


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// resetea errores
function resetErrors() {
    msgErrorsArray.forEach(msg => {
        msg.innerHTML = ""
    })
}

// valida el formulario
function validateForm(e) {
    let hasErrors = false
    
    resetErrors()

    // name
    if (inputName.value.length < 3) {
        hasErrors = true
        errorName.innerHTML = "Escriba su nombre"
        inputName.focus()
    }

    // diameter
    if (!isNumeric(inputDiameter.value) || inputDiameter.value < 0) {
        errorDiameter.innerHTML = "Por favor escriba un número mayor a cero"
        
        if (!hasErrors) {
            inputDiameter.focus()
        }

        hasErrors = true
    }

    // discovered
    if (!inputDiscovered.value) {
        errorDiscovered.innerHTML = "Por favor ingrese una fecha de descubrimiento"
        
        if (!hasErrors) {
            inputDiscovered.focus()
        }

        hasErrors = true
    }

    // galaxy
    if (!inputGalaxy.value) {
        errorGalaxy.innerHTML = "Por favor ingrese una galaxia"
        
        if (!hasErrors) {
            inputGalaxy.focus()
        }

        hasErrors = true
    }

    // image
    if (!inputImage.value) {
        
        errorImage.innerHTML = "Por favor ingrese una imágen"
        
        if (!hasErrors) {
            inputImage.focus()
        }

        hasErrors = true
    }

    if (hasErrors) {
        e.preventDefault()
    }
    
}

inputArray.forEach(input => {
    input.addEventListener('blur', validateForm)
})

form.addEventListener('submit', validateForm)