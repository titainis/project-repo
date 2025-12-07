import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import './FavoritesPage.scss'
import { Media } from "../../types/Media";

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState<Media[]>([])

    useEffect(() => {
      const savedFavorites: Media[] = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id: number) => {
    const updated = favorites.filter(item => item.id !== id);
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
            <Link to='/tv-series' className="text-decoration-none text-white">
              <Button className="rounded px-2">Find TV Series To Favorite</Button>
            </Link>
          </div> ) :
            (<div className="row">
              {favorites.map((media) => (
              <div key={media.id} className="col-md-3 mb-4">
                <div className="card favorites-page__card h-100">
                  <img
                      src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
                      className="card-img-top"
                      alt={media.title || media.name}
                  />
                  <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{media.title || media.name}</h5>
                      <p className="card-text">{media.release_date?.slice(0, 4) || media.first_air_date.slice(0, 4)}</p>

                      <div className="card-buttons d-flex flex-column mt-auto"> 
                        <Link to={media.media_type === 'movie' ? `/movies/${media.id}` : `/tv-series/${media.id}`}>
                          <Button className="card-buttons-details w-100"
                          >
                            View Details
                          </Button>
                      </Link>

                      <Button
                      className="card-buttons-remove w-100"
                      onClick={() => removeFavorite(media.id)}
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
