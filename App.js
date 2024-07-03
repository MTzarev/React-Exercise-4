import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems.js'
import Reducer from './components/Reducer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ListItems/>
        <Reducer/>
      </header>
    </div>
  );
}

export default App;
