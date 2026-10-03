import type { IMovie } from '../../models/movies';
import './index.css';
import { Link, } from "react-router-dom";
import React from "react";


export const CardTop: React.FC<{ movie: IMovie }> = ({ movie }) => {

  return (
    <div className="card-top">
      <Link to={`/movie/${movie.id}`} className="card-top__link">
        <img className="card-top__img" src={movie.posterUrl || '/default.jpg'} alt={`Постер фильма ${movie.title}`} />
      </Link>
    </div>

  )
}