const time = document.querySelector('.time')

const day = document.querySelector('.day')
const night = document.querySelector('.night')



setInterval(() => {
    const now = new Date()
    time.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

    if (now.getHours() >= 20 && now.getHours() < 6) {
        day.classList.add('hidden')
        night.classList.remove('hidden')
        /* day.style.display = 'none'
        night.style.display = 'inline-block' */
    } else {
        night.classList.add('hidden')
        day.classList.remove('hidden')
        /* day.style.display = 'inline-block'
        night.style.display = 'none' */
    }
}, 1000)