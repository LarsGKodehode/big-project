// CSS
import './App.css';

// Components
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';


/**
 * Main application
 */
function App() {
  return (
    <div className="App">
      <Menu style={{gridArea: 'menu'}}/>
      <Navbar style={{gridArea: 'nav'}}/>
    </div>
  );
};

export default App;