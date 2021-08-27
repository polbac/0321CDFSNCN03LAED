import Sidebar from './components/sidebar/Sidebar'
import PlanetList from './components/planet-list/PlanetList'
import PlanetDetail from './components/planet-detail/PlanetDetail'
import About from './components/about/About'
import './App.css';

import { SidebarTitle, SidebarSubtitle } from './config'


function App() {
  return (
    <main>
      <Sidebar 
        title={SidebarTitle}
        subtitle={SidebarSubtitle}
      />
      <PlanetDetail />
    </main>
  );
}

export default App;
