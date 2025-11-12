import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import './MovieSlider.scss';
import { Link } from "react-router-dom";
import { Movie } from "../../types/movies";

const MovieSlider = () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
    const sliderRef = useRef<HTMLDivElement>(null);
    
    const fetchTrendingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
    const data = await response.json();
    setTrendingMovies(data.results);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  // const scroll = (direction: "left" | "right") => {
  //   if (!sliderRef.current) return;
  //   const scrollDistance = 400;
  //   sliderRef.current.scrollBy({
  //     left: direction === "left" ? -scrollDistance : scrollDistance,
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
  const slider = sliderRef.current;
  if (!slider || trendingMovies.length === 0) return;

  const scrollSpeed = 1;
  let animationId: number;
  let paused = false;

  const animate = () => {
    if (!paused) {
      slider.scrollLeft += scrollSpeed;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        slider.scrollLeft = 0;
      }
    }
    animationId = requestAnimationFrame(animate);
  };

  const handleMouseEnter = () => paused = true;
  const handleMouseLeave = () => paused = false;

  slider.addEventListener("mouseenter", handleMouseEnter);
  slider.addEventListener("mouseleave", handleMouseLeave);

  animationId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationId);
    slider.removeEventListener("mouseenter", handleMouseEnter);
    slider.removeEventListener("mouseleave", handleMouseLeave);
  };
}, [trendingMovies]);

    return (
        <div className="movie-slider-container d-flex position-relative align-items-center">
            <div className="movie-slider d-flex gap-3" ref={sliderRef}>
              {[...trendingMovies, ...trendingMovies].map((movie, index) => 
                <Link to={`/movies/${movie.id}`} className='movie-slider__card d-flex flex-column align-items-center text-center'
                  key={`${movie.id}-${index}`}>
                    <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}  
                    />
                    <p className="movie-slider__title pt-1 mb-0">{movie.title}</p>
                </Link>
                )}
            </div>
        </div>
    );
}

export default MovieSlider;
