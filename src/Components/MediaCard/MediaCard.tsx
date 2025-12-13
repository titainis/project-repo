import './MediaCard.scss';
import { Media } from '../../types/Media';

interface MediaCardProps {
  media: Media;
}

const MediaCard = ({ media }: MediaCardProps) => {
    return (
        <>
          <a href="" className='media-card'>
            <div className="media-card__cover">
            <img src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
            alt={media.title || media.name}
            />
            </div>
            <div className='media-card__title'>
                {(media.title || media.name).length >= 20
                  ? (media.title || media.name).slice(0, 20) + "..."
                  : (media.title || media.name)
                }
            </div>
          </a>
        </>
    );
}

export default MediaCard;
