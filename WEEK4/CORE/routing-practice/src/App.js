import './App.css';
import { Router } from "@reach/router";
import Home from './components/Home';
import StrNum from './components/StrNum';
import TwoColors from './components/TwoColors';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <StrNum path="/:stringNum" />
        <TwoColors path="/:word/:clr1/:clr2" />
      </Router>
    </div>
  );
}

export default App;
