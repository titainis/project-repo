import './styles/App.scss';
import StartPage from './Pages/StartPage/StartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />}/>
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
