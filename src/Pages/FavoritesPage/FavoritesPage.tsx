import { useEffect, useState } from "react";
import { Movie } from "../../types/movies";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState<Movie[]>([])

    useEffect(() => {
    const savedFavorites: Movie[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id: number) => {
    const updated = favorites.filter(movie => movie.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

     return (
    <>
        <Header />
    <div className="container favorites-page mt-4">
      <h2 className="text-center mb-5">Your Favorite Movies</h2>

      {favorites.length === 0 ? (
        <p className="text-center fs-5">No favorites yet</p>) :
          (<div className="row">
            {favorites.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-4">
                <div className="card favorites-page__card h-100">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.release_date?.slice(0, 4)}</p>
                    <Button
                    className="mt-auto"
                    onClick={() => removeFavorite(movie.id)}
                    >
                    Remove
                    </Button>

                    <Link to={`/movies/${movie.id}`}>
                        <Button>Movie Details</Button>
                    </Link>
                    
                </div>
                </div>
            </div>
            ))}
        </div>)
    }
      
    </div>
    </>
  );


};

export default FavoritesPage;
