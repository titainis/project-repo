import MovieCard from "../MovieCard/MovieCard";
import { Media} from "../../types/Media";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const LatestMovies = () => {
      const apiKey = import.meta.env.VITE_API_KEY;
    
      const [latestMovies, setLatestMovies] = useState<Media[]>([]);
    
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
          {latestMovies.map((movie) => 
            <Link to={`/movies/${movie.id}`}>
              <MovieCard key={movie.id} movie={movie}/>
            </Link>
          )}
        </>
    );
};

export default LatestMovies;