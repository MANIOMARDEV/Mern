import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './Components/Form';
import AllAuthors from './Components/AllAuthors';
import UpdateAuthor from './Components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<AllAuthors/>} />
          <Route path='/newAuthor' element = {<Form/>}/>
          <Route path='/editAuthor/:id' element = {<UpdateAuthor />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
