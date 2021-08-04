window.addEventListener('load', () => {
    const inputSearch = document.querySelector('.search input')
    const searchForm = document.querySelector('.search')

    // cuando el input está en foco
    inputSearch.addEventListener('focus', () => {
        searchForm.classList.add('focused')
    })

    // cuando el input abandona el foco
    inputSearch.addEventListener('blur', () => {
        searchForm.classList.remove('focused')
    })
})
