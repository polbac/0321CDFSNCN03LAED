# JS DE FRONT: Fetch

<img src="https://media.giphy.com/media/SVgCHJ2n35EA6XFPpO/giphy-downsized-large.gif" width="300" />


## localStorage & sessionStorage

```
localStorage.getItem(key)
localStorage.setItem(key, value)
sessionStorage.getItem(key)
sessionStorage.setItem(key, value)
```

## location

```
location.reload()
location.href
location.search
```

## URLSearchParams

```
const params = new URLSearchParams(location.search)
params.get('name')
```

## fetch

### GET

```
fetch(URL) 
    .then(res => res.json())
    .then(body => {
        console.log(body)
    })
```

### POST

```
const body = {
    name: 'Juan',
    lastName: 'Lopez',
}
fetch(URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'content-type': 'application/json'
    }
}) 
    .then(body => {
        console.log(body)
    })
```

