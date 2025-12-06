import { Link, useNavigate, useParams } from "react-router";
import { Movie } from "../../types/movies";
import { Video } from "../../types/Video";
import { useEffect, useState, useRef } from "react";
import './MovieDetails.scss';
import Button from "../Button/Button";
import BackArrow from '../../assets/white-arrow.png';
import { formatRuntime } from "../../Utils/Runtime";

const MovieDetails = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const { id } = useParams();

    const VIDEO_API = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
    const DETAILS_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

    const [moviesDetails, setMoviesDetails] = useState<Movie | null>(null);
    const [movieVideo, setMovieVideo] = useState<Video[]>([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [notification, setNotification] = useState<string | null>(null);
    const navigate = useNavigate();

    const descriptionRef = useRef<HTMLElement | null>(null);

    const fetchMoviesDetails = async () => {
        const response = await fetch(DETAILS_API);
        const data = await response.json();
        setMoviesDetails(data);
    };

    const fetchMoviesVideo = async () => {
        const response = await fetch(VIDEO_API);
        const data = await response.json();
        setMovieVideo(data.results);
    }

    useEffect(() => {
        fetchMoviesDetails();
        fetchMoviesVideo();
    }, [id]);

    useEffect(() => {
    if (!moviesDetails) return;

    const favorites: Movie[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some(fav => fav.id === moviesDetails.id));
    }, [moviesDetails]);

    const trailer = movieVideo.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    const scrollToDescription = () => {
      descriptionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleFavorite = () => {
      if (!moviesDetails) return;
      const favorites: Movie[] = JSON.parse(localStorage.getItem("favorites") || "[]");

      if (isFavorite) {
        const updated = favorites.filter(fav => fav.id !== moviesDetails.id);
        localStorage.setItem("favorites", JSON.stringify(updated));
        setIsFavorite(false);
      } else {
          favorites.push(moviesDetails);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          setIsFavorite(true);
        }

      setNotification(isFavorite ? "Removed From Favorites" : "Added To Favorites");

      setTimeout(() => {
        setNotification(null);
      }, 3000);
    };

    return (
        <div className="movie-details-container pb-5">
            {moviesDetails ? (
                <div className="movie-details position-relative">
                    {trailer && (
                        <div className="movie-details__video">
                            <iframe
                              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&showinfo=0&rel=0&modestbranding=1`}
                              title={trailer.name}
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                              tabIndex={-1}
                            ></iframe>
                        </div>
                    )}

                    <Button className="back-btn position-fixed top-0 m-3 bg-transparent border-none" onClick={() => navigate(-1)}>
                        <img src={BackArrow} alt="BackArrow" width={20} height={20} className=""/>
                      </Button>
              
                    <div className="movie-details__card">
                        <h2 className="movie-details__card-title">{moviesDetails.title}</h2>
                        <p>{moviesDetails.release_date.slice(0, 4)}
                        </p>
                        <p>
                          {formatRuntime(moviesDetails.runtime)}
                        </p>
                        <img src={`https://image.tmdb.org/t/p/w500/${moviesDetails.poster_path}`} alt={moviesDetails.title} />
                        <div className="movie-details__card-imdb pt-3"> 
                            <span >IMDB:</span> {moviesDetails.vote_average < 1 ? ( 
                                "Not rated yet"
                            ) : ( 
                                <span>{moviesDetails.vote_average.toFixed(1)} </span>
                           )}
                        </div>

                        <div className="movie-details__card-description-button pt-2">
                            <Button onClick={scrollToDescription}>Description</Button>
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}

            <section ref={descriptionRef} className="movie-description pt-5">
                <div className="movie-description__overview d-flex flex-column justify-content-center align-items-center text-align-center">
                    <h2 className="pb-2">Description</h2>
                    <p className="text-center w-75">{moviesDetails?.overview}</p>
                    <h3>Genres</h3>
                    <p className="pb-2">{moviesDetails?.genres?.map(g => g.name).join(", ")}</p>

                    <Button className={`movie-description__button ${isFavorite === true ? 'movie-description__button-unfavorite' : 'movie-description__button-favorite'}`} 
                      onClick={toggleFavorite}
                    >
                        {isFavorite ? "Favorited" : 'Favorite'}
                    </Button>
                </div>
            </section>

            {notification && (
              <Link to='/favorites' className={`pop-up ${isFavorite === true ? 'add' : 'remove'} 
                  d-flex flex-column align-items-center justify-content-center text-decoration-none`}>
                <p className="m-0">{notification}</p>
                <p className="m-0">Go to Favorites</p>
              </Link>
            )}
            
        </div>
    );
};

export default MovieDetails;
