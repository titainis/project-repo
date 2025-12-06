import Header from "../../Components/Header/Header";
import MediaSlider from "../../Components/MediaSlider/MediaSlider";

const SeriesPage = () => {
    return (
        <>
          <Header />

          <div className="fluid-container movies-page pt-5 h-100vh pb-5 position-relative">
            <section className="movies-page__trending-movies pt-5">
              <h1 className="movie-page__trending d-flex justify-content-center">Trending TV Series</h1>
              <div className="movies-page__trending-movie-card d-flex flex-wrap pt-4 p-5 justify-content-center">
                  <MediaSlider 
                    fetchUrl="https://api.themoviedb.org/3/trending/tv/day"
                    mediaType="tv"
                  />
              </div>
            </section>
          </div>


        </>
    );
}

export default SeriesPage;