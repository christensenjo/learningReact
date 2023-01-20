import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar.js';
import Intro from './components/Intro/Intro.js';

function App() {
  return (
    <div className="App" id="App">
      <HeaderBar />
      <Intro />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Joel's React App is Deployed on Firebase...
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
      </header>
    </div>
  );
}

export default App;
