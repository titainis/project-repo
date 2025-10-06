import './styles/App.scss';
import StartPage from './Pages/StartPage/StartPage';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesPage from './Pages/MoviesPage/MoviesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />}/>
        <Route path='/movies' element={<MoviesPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
