import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Elenco from './pages/elenco';
import Comentarios from './pages/comentarios';
import Contato from './pages/contato';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/elenco' element={<Elenco />}/>
          <Route path='/comentarios' element={<Comentarios />}/>
          <Route path='/contato' element={<Contato />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
