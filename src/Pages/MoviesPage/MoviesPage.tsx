import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import LatestMovies from "../../Components/LatestMovies/LatestMovies";
import './MoviesPage.scss';
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import { Movie } from "../../types/movies";


const MoviesPage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [latestMovies, setLatestMovies] = useState<Movie[]>([]);

  const fetchLatestMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
    const data = await response.json();
    setLatestMovies(data.results);
    //console.log(data.results);
  }

  useEffect(() => {
    fetchLatestMovies();
  }, []);

    return (
        <>
          <Header />

          <div className="fluid-container movies-page h-100vh bg-black">
            <section className="movies-page__trending-movies pb-5">
              <h1 className="movie-page__trending pt-5">Trending</h1>
              <div className="movies-page__trending-movie-card d-flex flex-wrap p-5 gap-5 justify-content-center">
                  <MovieSlider />
              </div>
            </section>

            <section className="movies-page__latest-movies">
              <h1 className="movies-page__latest bg-primary">Latest Movies</h1>
                <div className="movies-page__latest-movie-card d-flex flex-wrap p-5 gap-5 justify-content-center">
                  < LatestMovies />
                </div>
            </section>
          </div>
        </>
    );
}

export default MoviesPage;