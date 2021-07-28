
/* window.addEventListener("load", () => {
    const welcome = document.querySelector('div#welcome')
    console.log(welcome)
}) */

const welcome = document.querySelector('div#welcome')
welcome.innerHTML += "<br/>Hello <u>gente</u>!"

// style

welcome.style.color = '#ff0000'
welcome.style.backgroundColor = '#ffff00'

const itemsMenu = document.querySelectorAll("nav div a")

itemsMenu.forEach(item => {
    item.style.color = 'blue'
    /* item.classList.add('active') */
})

/* itemsMenu[0].classList.remove('active') */

/* const earth = document.getElementsByClassName('earth')
console.log('earth', earth)

const logo = document.getElementById('logo')
console.log('logo', logo) */

// permite agregar una clase

if (sectionName === 'home') {
    itemsMenu[0].classList.add('active')
}

/* const name = prompt("ingresa tu nombre")
console.log(name) */