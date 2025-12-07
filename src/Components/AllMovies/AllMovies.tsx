import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './AllMovies.scss';
import MovieCard from "../MovieCard/MovieCard";
import { Media } from "../../types/Media";

export default function AllMovies() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [allMovies, setAllMovies] = useState<Media[]>([]);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [sort, setSort] = useState("popularity.desc");

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=${sort}${
          genre ? `&with_genres=${genre}` : ""
        }${year ? `&year=${year}` : ""}`;
        const response = await fetch(url);
        const data = await response.json();
        setAllMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchAllMovies();
  }, [genre, year, sort]);

  return (
    <>
    <div className="all-movies-component w-100 height-100vh pb-5">
      <div className="filters d-flex gap-3 mb-4 justify-content-center flex-wrap">
        <select onChange={(e) => setGenre(e.target.value)} className="form-select w-auto">
          <option value="" disabled selected>Genres</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          <option value="27">Horror</option>
          <option value="10749">Romance</option>
          <option value="14">Fantasy</option>
        </select>

        <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => {
                if(e.target.value.length <= 4)
                setYear(e.target.value) 
              }
            }
            onBlur={(e) => {
                const value = e.target.value;
                if (value && (parseInt(value) < 1900 || parseInt(value) > 2025)) {
                setYear('');
                }
            }}
            className="filter-input form-control"
            min="1900"
            max="2025"
        />

        <select onChange={(e) => setSort(e.target.value)} className="form-select w-auto">
          <option value="" selected disabled>Sort By</option>
          <option value="popularity.desc">Most Popular</option>
          <option value="vote_average.desc">Highest Rated</option>
          <option value="release_date.desc">Newest</option>
        </select>

      </div>
 
      <div className="d-flex flex-wrap justify-content-center gap-5 pt-3 pb-5">
        {allMovies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          allMovies.map((movie) => (
            <Link to={`/movies/${movie.id}`} >
              <MovieCard key={movie.id} movie={movie} />
            </Link>
          ))
        )}
      </div>
    </div>
    </>
  );
}