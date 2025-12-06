import './styles/App.scss';
import StartPage from './Pages/StartPage/StartPage';
import { Routes, Route, HashRouter } from 'react-router-dom';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import MediaDetails from './Components/MediaDetails/MediaDetails';
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage';
import AllMoviesPage from './Pages/AllMoviesPage/AllMoviesPage';
import SeriesPage from './Pages/SeriesPage/SeriesPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<StartPage />}/>
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/movies/:id' 
        element={<MediaDetails fetchUrl='https://api.themoviedb.org/3/movie' mediaType='movie'/>} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/movies/all-movies' element={<AllMoviesPage />} />
        <Route path='/tv-series' element={<SeriesPage />}/>
        <Route path='/tv-series/:id' 
        element={<MediaDetails fetchUrl='https://api.themoviedb.org/3/tv' mediaType='tv' />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
