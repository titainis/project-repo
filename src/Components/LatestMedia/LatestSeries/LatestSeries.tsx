import { useEffect, useState } from "react";
import { Media } from "../../../types/Media";
import { Link } from "react-router";
import MediaCard from "../../MediaCard/MediaCard";


const LatestSeries = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    
    const [latestSeries, setLatestSeries] = useState<Media[]>([])

    const FetchSeries = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`);
            const data = await response.json();
            setLatestSeries(data.results);
            console.log(data.results);
        }

    useEffect(() => {
        FetchSeries();
    }, [])

    return (
        <>
        {latestSeries.map((series) => 
            <Link to={`/tv-series/${series.id}`}>
                <MediaCard key={series.id} media={series}/>
            </Link>
        )}
        </>
    );
}

export default LatestSeries;