import type { IMovie } from '../../models/movies';
import './index.css';
import { Link, } from "react-router-dom";


export const CardTop: React.FC<{ movie: IMovie }> = ({ movie }) => {

  return (
    <div className="card-top">
      <Link to={`/movie/${movie.id}`} key={movie.id} className="card-top__link">
        <img className="card-top__img" src={movie.posterUrl || './public/default.jpg'} alt={`Постер фильма ${movie.title}`} />
      </Link>
    </div>

  )
}