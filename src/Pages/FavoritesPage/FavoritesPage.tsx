import { useEffect, useState } from "react";
import { Movie } from "../../types/movies";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import './FavoritesPage.scss'

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
    <div className="container favorites-page">
      <h2 className="text-center pt-3 mb-5">Your Favorite Movies</h2>

      {favorites.length === 0 ? (
        <div className="text-center fs-5">
          <p>No favorites yet</p>
          <Link to='/movies' className="text-decoration-none text-white">
            <Button className="rounded px-2">Find Movies To Favorite</Button>
          </Link>
        </div> ) :
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

                    <div className="card-buttons d-flex flex-column mt-auto"> 
                      <Link to={`/movies/${movie.id}`}>
                        <Button className="card-buttons-details w-100"
                        >
                          View Details
                        </Button>
                    </Link>

                    <Button
                    className="card-buttons-remove w-100"
                    onClick={() => removeFavorite(movie.id)}
                    >
                    Remove
                    </Button>
                    </div>
                   
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
