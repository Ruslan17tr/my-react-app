import "./index.css";
import type { IMovie } from "../../models/movies";
import { Link } from "react-router-dom";
import { genreNames } from "../GanreCard/GenreCard";

const getRatingColor = (rating: number): string => {
  if (rating >= 8) return '#A59400';
  if (rating >= 7.5) return '#308E21';
  if (rating >= 5) return '#777777';
  return '#C82020';
};

interface SearchResultProps {
  movie: IMovie;
  onSelect?: () => void;
}



export const SearchResult = ({ movie, onSelect }: SearchResultProps) => {

  const ganres = movie.genres
    .slice(0, 2)
    .map((g) => genreNames[g])
    .join(', ');

  const ratingColor = getRatingColor(movie.tmdbRating);

  return (
    <Link className="search-result__link" to={`/movie/${movie.id}`} onClick={onSelect} >
      <img className="search-result__img" src={movie.posterUrl} alt={movie.title} />
      <div className="search-result__info">
        <div className="search-result__info-top">
          <span className="search-result__rating" style={{ backgroundColor: ratingColor }}>★
            {movie.tmdbRating.toFixed(1)?? '—'}</span>
          <span className="search-result__text">{movie.releaseDate}</span>
          <span className="search-result__text">{ganres}</span>
          <span className="search-result__text">{Math.floor(movie.runtime / 60)} ч {movie.runtime % 60} мин</span>
        </div>
        <h3 className="search-result__title">{movie.title}</h3>
      </div>
    </Link>
  )
}