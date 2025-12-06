import Button from "../../Button/Button";
import './SearchBar.scss';
import SearchIcon from '../../../assets/SearchIcon/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { useEffect, useState } from "react";
import { Search } from "../../../types/Search";
import { useNavigate } from "react-router";

const SearchBar = ({ isVisible}: {isVisible: boolean}) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [searchResults, setSearchResults] = useState<Search[]>([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const SearchAPI = async (q: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${q}`);
    const data = await response.json();
    setSearchResults(data.results || []);
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query)
        SearchAPI(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query])

  useEffect(() => {
    if(!isVisible) {
      setSearchResults([]);
    }
  }, [isVisible])

  const movieSearch = searchResults.filter(item => item.media_type === 'movie');
  const seriesSearch = searchResults.filter(item => item.media_type === 'tv');

  return (
    <div className="search">
      <div> 
        <input 
          className='search__input' 
          name="Search" 
          type="text" 
          placeholder="Search"
          onChange={(e) => {
            setQuery(e.target.value);
          }} 
        />
        <Button className="search__btn">
          <img className="search__icon"
            src={SearchIcon}
            alt="Search" 
          />
        </Button>
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          <div className="p-2">
            <h2>Movies</h2>
            <ul className="search-results__list d-flex flex-column gap-3 p-0">
              {movieSearch.map(movie => (
                <li
                  className="search-results__list-item d-flex"
                  key={movie.id}
                  onClick={() => navigate(`/movies/${movie.id}`)}
                >
                  <img
                    className="search-results__list-item-img"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  
                  <div className="search-results__list-item-info d-flex flex-column">
                    <p className="search-results__list-item-title">{movie.title}</p>
                    <p>{movie.release_date.slice(0, 4)}</p>
                    <p className="search-results__list-item-type">
                      {movie.media_type.charAt(0).toUpperCase() +
                        movie.media_type.slice(1).toLowerCase()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-2">
            <h2>TV Series</h2>
            <ul>
              {seriesSearch.map((series) => (
                <li
                  className="search-results__list-item d-flex"
                  key={series.id}
                  // onClick={() => navigate(`/tv-series/${series.id}`)}
                >
                  <img
                    className="search-results__list-item-img"
                    src={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
                    alt={series.name}
                  />
                  
                  <div className="search-results__list-item-info d-flex flex-column">
                    <p className="search-results__list-item-title">{series.name}</p>
                    <p>{series.first_air_date.slice(0, 4)}</p>
                    <p className="search-results__list-item-type">
                      {series.media_type.toUpperCase()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}

export default SearchBar;
