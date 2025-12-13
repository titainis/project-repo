import { useState, useEffect } from "react";
import MediaCard from "../MediaCard/MediaCard";
import { Link } from "react-router-dom";
import { Media } from "../../types/Media";
import { MediaProps } from "../../types/MediaProps";
import './AllMedia.scss';

const AllMedia = ({ mediaType }: MediaProps) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [allMedia, setAllMedia] = useState<Media[]>([]);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [sort, setSort] = useState("popularity.desc");

  useEffect(() => {
    const fetchAllMedia = async () => {
      
      const YearByType = year ? `&${mediaType === 'movie' ? 'year' : 'first_air_date_year'}=${year}` : "";
      const genres = genre ? `&with_genres=${genre}` : "";

      const url = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&sort_by=
      ${sort}${genres}${YearByType}`;

        const response = await fetch(url);
        const data = await response.json();
       
      setAllMedia(data.results);
    };

    fetchAllMedia();
  }, [genre, year, sort, mediaType]);

  return (
    <div className="media-list-component w-100 pb-5">
      <div className="filters d-flex gap-3 mb-4 justify-content-center flex-wrap">
        <select onChange={(e) => setGenre(e.target.value)} className="form-select w-auto">
          <option value="" disabled>Genres</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          {mediaType === 'movie' && <option value="27">Horror</option>}
          {mediaType === 'movie' && <option value="10749">Romance</option>}
          <option value="14">Fantasy</option>
          {mediaType === 'tv' && <option value="10759">Action & Adventure</option>}
          {mediaType === 'tv' && <option value="16">Animation</option>}
        </select>

        <input type="number" 
          placeholder="Year" 
          value={year} 
          onChange={(e) => { 
            if(e.target.value.length <= 4) setYear(e.target.value) 
            }} 
          onBlur={(e) => { 
            const value = e.target.value; 
            if (value && (parseInt(value) < 1900 || parseInt(value) > 2025)) { 
              setYear(''); 
              } 
            }} 
            className="filter-input form-control" 
            min="1900" 
            max="2025" 
          />

        <select onChange={(e) => setSort(e.target.value)} className="form-select w-auto">
          <option value="popularity.desc">Most Popular</option>
          <option value="vote_average.desc">Highest Rated</option>
          <option value='release_date.desc'>
            Newest
          </option>
        </select>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-5 pt-3 pb-5">
        {allMedia.length === 0 ? (
          <p>No results found</p>
        ) : (
          allMedia.map((media) => (
            <Link 
              key={media.id} 
              to={mediaType === 'movie' ? `/movies/${media.id}` : `/tv-series/${media.id}`}
            >
              <MediaCard media={media} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default AllMedia;