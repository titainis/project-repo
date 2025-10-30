import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import './MovieSlider.scss';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

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

//   const scroll = (direction: "left" | "right") => {
//     if (!sliderRef.current) return;
//     const scrollDistance = 400;
//     sliderRef.current.scrollBy({
//       left: direction === "left" ? -scrollDistance : scrollDistance,
//       behavior: "smooth",
//     });
//   };

  useEffect(() => {
  const slider = sliderRef.current;
  if (!slider || trendingMovies.length === 0) return;

  const scrollSpeed = 0.8;
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
            <Button className="movie-slider-container__arrow left">ll</Button>
            <div className="movie-slider d-flex gap-3" ref={sliderRef}>
              {[...trendingMovies, ...trendingMovies].map((movie, index) => 
                <a href="" className='movie-slider__card h-5 w-5'
                  key={`${movie.id}-${index}`} title={movie.title}>
                    <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}  
                    />
                    <p>{movie.title}</p>
                </a>
                )}
            </div>
            <Button className="movie-slider-container__arrow right">rr</Button>
        </div>
    );
}

export default MovieSlider;