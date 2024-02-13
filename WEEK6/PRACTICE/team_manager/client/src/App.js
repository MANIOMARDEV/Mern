import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import PlayersTableView from './views/PlayersTableView';
import PlayerAddView from './views/PlayerAddView';
import GameView from './views/GamesView'
function App() {
  return (
    <div className="App">
      <div className='h4'>
        <Link to={"/players/list"}>Manage Players</Link><span> | </span>
        <Link to={"/status/game/1"}>Manage Player Status</Link>
      </div>
      <Routes>
        <Route path='/players/list' element={<PlayersTableView />} />
        <Route path='/players/new' element={<PlayerAddView />} />
        <Route path='/status/game/:num' element={<GameView />} />
      </Routes>
    </div>
  );
}

export default App;
