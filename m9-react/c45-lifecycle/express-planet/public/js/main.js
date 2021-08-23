const menuItem = document.querySelector('.section-list')
const submenu = document.querySelector('.submenu-planets')

function showSubmenu() {
    submenu.classList.add('show')
}

function hideSubmenu() {
    submenu.classList.remove('show')
}

menuItem.addEventListener('mouseover', showSubmenu)
submenu.addEventListener('mouseover', showSubmenu)
menuItem.addEventListener('mouseout', hideSubmenu)
submenu.addEventListener('mouseout', hideSubmenu)

menuItem.addEventListener('click', function(e) {
    const { innerWidth } = window
    
    if (innerWidth > 620) {
        e.preventDefault()    
    }
})

/* 
keypress
keydown
keyup 
*/

// cuando el usuario toca escape, se cierre el submenú
document.addEventListener("keydown", function(e) {
    const { key } = e

    // chequeamos que el key sea el de la tecla escape
    if (key === 'Escape') {
        hideSubmenu()
    }
})


const tooltip = document.querySelector('.tooltip')
const planets = document.querySelectorAll('.planet')

const TOOLTIP_WIDTH = 257
const TOOLTIP_HEIGHT = 55

planets.forEach(planet => {
    planet.addEventListener("mouseover", function(e) {
        tooltip.style.display = 'block'
    })

    planet.addEventListener("mouseout", function(e) {
        tooltip.style.display = 'none'
    })

    planet.addEventListener("mousemove", function(e) {
        const { clientX, clientY } = e
        tooltip.style.display = 'block'
        tooltip.style.left = (clientX - TOOLTIP_WIDTH/2) + 'px'
        tooltip.style.top = (clientY - TOOLTIP_HEIGHT) + 'px'
    })
})
