import './index.css';
import type { IMovie } from '../../models/movies';
import { Link, useLocation } from 'react-router-dom';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'
import { genreNames } from "../../components/GanreCard/GenreCard"


const getRatingColor = (rating: number): string => {
  if (rating >= 8) return '#A59400';
  if (rating >= 7.5) return '#308E21';
  if (rating >= 5) return '#777777';
  return '#C82020';
};

interface HeroSectionProps {
  movie: IMovie;
  onRefresh?: () => void;
}

export const HeroSection = ({ movie, onRefresh }: HeroSectionProps) => {

  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const ratingColor = getRatingColor(movie.tmdbRating)

  const genres = movie.genres
    .slice(0, 2)
    .map((g) => genreNames[g])
    .join(', ');

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  return (
    <section className="hero">
      <div className="hero__content">
        <div className='hero__info'>
          <div className="hero__movie-rating" style={{ background: ratingColor }}>
            <svg width="16" height="16">
              <use href='/sprite.svg#star-icon'>
              </use>
            </svg>
            <span>
              {movie.tmdbRating.toFixed(1)}
            </span>
          </div>
          <span className='hero__movie-info'>{movie.releaseYear}</span>
          <span className='hero__movie-info'>{genres}</span>
          <span className='hero__movie-info'>{hours} ч {minutes} мин</span>
        </div>
        <h1 className="hero__title">
          {movie.title}
        </h1>
        <p className="hero__description">
          {movie.plot}
        </p>
        <div className="hero__buttons">
          <button
            className="btn btn-trailer"
            onClick={() => {
              if (movie.trailerYouTubeId) {
                window.open(`https://www.youtube.com/watch?v=${movie.trailerYouTubeId}`, '_blank');
              }
            }}
          >
            Трейлер
          </button>
          {isMainPage && (<Link className="btn btn-about" to={`/movie/${movie.id}`}>О фильме</Link>)}
          <FavoriteButton id={movie.id} />

          {isMainPage && (<button className="btn btn-circle" aria-label="Обновить" onClick={onRefresh}>
            <svg width="24" height="24">
              <use href='./sprite.svg#reload-icon'></use>
            </svg>
          </button>)}
        </div>
      </div>

      <div className="hero__image-wrapper">
        <img
          src={movie.backdropUrl || './default.jpg'}
          alt={`Постер фильма ${movie.title}`}
          className="hero__image"
        />
      </div>
    </section>
  );
};

