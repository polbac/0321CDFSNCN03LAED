# C46 - hooks

<img src="https://media4.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b952uoi6huly8sad0d4vwtnipn67ujnrs99rdr6oyxls&rid=giphy.gif&ct=s" width="350" />

## useState

```
const [var, setVar] = useState()
```

## useEffect

```
useEffect(() => {

}, [deps])
```

```
// componentDidMount
useEffect(() => {

}, [])
```

```
// componentDidUpdate
useEffect(() => {

})
```

```
// componentDidUnmount
useEffect(() => {
    return () => {}
}, [])
```

## useRef

```
const refEl = useRef()

<div ref={refEl} />
```