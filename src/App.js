import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
      </header>
    </div>
  );
}

export default App;
