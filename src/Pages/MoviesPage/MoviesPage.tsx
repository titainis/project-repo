import Header from "../../Components/Header/Header";
import LatestMovies from "../../Components/LatestMovies/LatestMovies";
import './MoviesPage.scss';
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import Button from "../../Components/Button/Button";


const MoviesPage = () => {
    return (
        <>
          <Header />

          <div className="fluid-container movies-page h-100vh pb-5">
            <section className="movies-page__trending-movies pt-5">
              <h1 className="movie-page__trending d-flex justify-content-center">Trending Movies</h1>
              <div className="movies-page__trending-movie-card d-flex flex-wrap pt-4 p-5 gap-5 justify-content-center">
                  <MovieSlider />
              </div>
            </section>

            <section className="movies-page__latest-movies pt-5">
              <h1 className="movies-page__latest  d-flex justify-content-center">Latest Movies</h1>
                <div className="movies-page__latest-movie-card d-flex flex-wrap p-5 gap-5 justify-content-center">
                  <LatestMovies />
                </div>
            </section>

              <div className="d-flex justify-content-center">
                <Button className="">See All Movies</Button>
              </div>

          </div>


        </>
    );
}

export default MoviesPage;