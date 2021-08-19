import Sidebar from './components/sidebar/Sidebar'
import PlanetList from './components/planet-list/PlanetList'

import './App.css';

import { SidebarTitle, SidebarSubtitle } from './config'


function App() {
  return (
    <main>
      <Sidebar 
        title={SidebarTitle}
        subtitle={SidebarSubtitle}
      />
      <PlanetList/>
    </main>
  );
}

export default App;
