import './MovieCard.scss';

interface Movie {
  poster_path: string;
  title: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <>
          <a href="" className='movie-card'>
            <div className="movie-card__cover">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}  
            />
            </div>
            <div className='movie-card__title'>
                <></>
                {movie.title.length >= 20 ? movie.title.slice(0, 20) + "..." : movie.title}
            </div>
          </a>
        </>
    );
}

export default MovieCard;
