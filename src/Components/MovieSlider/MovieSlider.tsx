import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import './MovieSlider.scss';
import { Link } from "react-router-dom";
import { Movie } from "../../types/movies";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";

const MovieSlider = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const STOP_DURATION = 10000000;
  const START_DURATION = 60;

  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [duration, setDuration] = useState(START_DURATION);
  const [finish, setFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
    
  const fetchTrendingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
    const data = await response.json();
    setTrendingMovies(data.results);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    let controls;
    let finalPos = -width / 2 - 8;

    if(finish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPos], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPos),
        onComplete: () => {
          setFinish(false);
          setRerender(!rerender);
        },
      })
    } else {
       controls = animate(xTranslation, [0, finalPos], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
}, [xTranslation, width, duration, rerender]);

    return (
        <div className="movie-slider-container d-flex position-relative align-items-center">
            <motion.div className="movie-slider d-flex gap-3" 
            ref={ref} 
            style={ {x: xTranslation, width: "max-content"} }
            onHoverStart={() => {
              setFinish(true);
              setDuration(STOP_DURATION);
            }}
            onHoverEnd={() => {
              setFinish(true);
              setDuration(START_DURATION);
            }}
            >
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
            </motion.div>
        </div>
    );
}

export default MovieSlider;
