const API_SEARCH_URL = 'http://localhost:3000/api/planets/search?name='

window.addEventListener('load', () => {
    const search = document.querySelector('.search')
    const inputSearch = document.querySelector('.search input')
    const searchForm = document.querySelector('.search')
    const searchRecent = document.querySelector('.search .results .recent')
    const searchRecentContainer = document.querySelector('.search .results .recent .list')
    const containerResults = document.querySelector('.search .results')
    const containerResultsList = document.querySelector('.search .results .list-results')

    // cuando el input está en foco
    inputSearch.addEventListener('focus', () => {
        searchForm.classList.add('focused')
        containerResults.style.display = 'block'
        searchRecent.style.display = 'block'

        // poner en componente ultima busqueda
        searchRecentContainer.innerHTML = localStorage.getItem('recent_search') || '-'
        
    })

    // cuando tapea enter agregamos en localStorage lo buscado
    inputSearch.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            searchForm.classList.remove('focused')
            containerResults.style.display = 'none'
            searchRecent.style.display = 'none'
            containerResultsList.style.display = 'none'
            inputSearch.value = ''
        } else {
            doSearch()
        }
    })

    // generar busqueda
    function doSearch() {
        const value = inputSearch.value
        containerResultsList.style.display = 'block'
        containerResultsList.innerHTML = 'cargando...'

        localStorage.setItem('recent_search', value)

        // poner en componente ultima busqueda
        searchRecentContainer.innerHTML = value

        fetch(`${API_SEARCH_URL}${value}`)
            .then(res => res.json())
            .then(res => {
                containerResultsList.innerHTML = ''

                if (res.meta.total === 0) {
                    containerResultsList.innerHTML = 'No se encontraron planetas :('
                } else {
                    res.data.planets.forEach(planet => {
                        containerResultsList.innerHTML += `<a href='/planets/detail/${planet.id}'>${planet.name}</a>`
                    })
                    
                }
            })
    }

    // detecta click afuera
    window.addEventListener('click', (e) => {
        const clickOutside = e.composedPath().includes(search)
        if (!clickOutside) {
            searchForm.classList.remove('focused')
            containerResults.style.display = 'none'
            searchRecent.style.display = 'none'
            containerResultsList.style.display = 'none'
            inputSearch.value = ''
        }
    })
})
