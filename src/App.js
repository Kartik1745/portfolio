import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <About />
        <Projects />
      </header>
    </div>
  );
}

export default App;
