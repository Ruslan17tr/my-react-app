import './index.css';
import type { IMovie } from '../../models/movies';
import { CardTop } from '../CardTop/CardTop';
import { genreNames } from '../GanreCard/GenreCard'

interface IMovieList {
    movie: IMovie[];
    genre: string | null;
    onBack?: () => void;
}

const MovieList = ({movie, genre, onBack}:IMovieList) => {
 
    return (
        <section className='genre-movies'>
            <button onClick={onBack} className="genre-movies__button"><svg className='footer__social-icon' width="40" height="40">
                        <use href="/sprite.svg#back-icon"></use>
                    </svg> {genre ? genreNames[genre] : 'Все фильмы'}</button>
            <ol className="genre-movies__list">
                {movie.map((movie) => (
                    <li key={movie.id} className="genre-movies__item">
                        <CardTop movie={movie} />
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default MovieList;