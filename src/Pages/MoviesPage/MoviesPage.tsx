import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import MovieCard from "../../Components/MovieCard/MovieCard";


interface Movie {
  id: number;
  title: string;
  poster_path: string;
}


const MoviesPage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);

  const [movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

    return (
        <>
          <Header />

          <div className="fluid-container movies-page h-100vh">
            <section className="movies-page__trending-movies">
              <h1 className="movie-page__trending">Trending</h1>
              <div className="movies-page__movie-card d-flex flex-wrap p-5 gap-5 justify-content-center">
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
              </div>
            </section>
          </div>
        </>
    );
}

export default MoviesPage;