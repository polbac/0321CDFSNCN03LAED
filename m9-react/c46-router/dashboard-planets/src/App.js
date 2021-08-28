import { Switch, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
// Secciones
import PlanetList from './containers/planet-list/PlanetList'
import PlanetDetail from './containers/planet-detail/PlanetDetail'
import About from './containers/about/About'
import NotFound from './containers/not-found/NotFound'
import './App.css';

import { SidebarTitle, SidebarSubtitle } from './config'


function App() {
  return (
    <main>
      <Sidebar 
        title={SidebarTitle}
        subtitle={SidebarSubtitle}
      />
      <Switch>
        <Route exact path="/" component={PlanetList} />
        <Route path="/planet/:id" component={PlanetDetail} />
        <Route path="/about" component={About} />

        <NotFound />
      </Switch>
    </main>
  );
}

export default App;
