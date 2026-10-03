import './index.css';
import type { IMovie } from '../../models/movies';

export const AboutMovie: React.FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div className='about-movie'>
      <h2 className='about-movie__title'>О фильме</h2>
      <dl className="about-movie__content">
        <div className="about-movie__row">
          <dt>Язык оригинала</dt>
          <dd>{movie.language}</dd>
        </div>
        <div className="about-movie__row">
          <dt>Бюджет</dt>
          <dd>{movie.budget}</dd>
        </div>
        <div className="about-movie__row">
          <dt>Выручка</dt>
          <dd>{movie.revenue}</dd>
        </div>
        <div className="about-movie__row">
          <dt>Режиссёр</dt>
          <dd>{movie.director}</dd>
        </div>
        <div className="about-movie__row">
          <dt>Продакшен</dt>
          <dd>{movie.production}</dd>
        </div>
        <div className="about-movie__row">
          <dt>Награды</dt>
          <dd>{movie.awardsSummary}</dd>
        </div>
        <div className="about-movie__row">
          <dt>Рейтинг</dt>
          <dd>{movie.tmdbRating}</dd>
        </div>
      </dl>
    </div>
  )
}
