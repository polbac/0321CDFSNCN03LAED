import Sidebar from './components/Sidebar'
import Planets from './components/Planets'

import './App.css';

import { SidebarTitle, SidebarSubtitle } from './config'


function App() {
  return (
    <main>
      <Sidebar 
        title={SidebarTitle}
        subtitle={SidebarSubtitle}
      />
      <Planets/>
    </main>
  );
}

export default App;
