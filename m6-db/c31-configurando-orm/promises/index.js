const fs = require('fs').promises
const path = require('path')
// const fileGenesis = fs.readFileSync(path.resolve('./genesis.txt'), { encoding: 'utf-8'})


const fileGenesis = fs.readFile(path.resolve('./genesis.txt'), { encoding: 'utf-8'})
const fileApocalipsis = fs.readFile(path.resolve('./apocalipsis.txt'), { encoding: 'utf-8'})

fileGenesis
    .then((genesis) => {
        console.log(genesis)
        fileApocalipsis
    .then((apocalipsis) => {
        console.log(apocalipsis)

    })

    })
    .catch(err => {
        console.log('ups ocurrió un error')
    })

fileApocalipsis
    .then((apocalipsis) => {
        console.log(apocalipsis)

    })
    .catch(err => {
        console.log('ups ocurrió un error')
    })
 /* 

Promise.all([fileGenesis, fileApocalipsis])
    .then(results => {
        const [genesis, apocalipsis] = results

        console.log('genesis', genesis)
        console.log('apocalipsis', apocalipsis)
    })

 */