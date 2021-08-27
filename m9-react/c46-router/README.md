# C46 - Router

<img src="https://media4.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b952uoi6huly8sad0d4vwtnipn67ujnrs99rdr6oyxls&rid=giphy.gif&ct=s" width="350" />

## React Router

https://reactrouter.com/

### Install

```
npm install react-router-dom
```

### Router

```
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

<Router>
    <Link to="/">Home</Link>
</Router>

<Switch>
    <Route path="/list">
        <List />
    </Route>
    <Route path="/detail/:id">
        <Detail />
    </Route>
     <Route path="*">
        <404Page />
    </Route>
</Switch>

```