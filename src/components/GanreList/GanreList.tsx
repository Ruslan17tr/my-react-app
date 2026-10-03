import type { GenreListType } from '../../models/genre';
import './index.css';
import { GenreCard } from '../GanreCard/GenreCard';

interface GenreListProps  {
    genres: GenreListType;
}

export const GenreList= ({genres}:GenreListProps )=> {

    return (
        <section className='genre-movies'>
            <h2 className="genre-movies__title">Жанры фильмов</h2>
            <ul className="genre-list">
                {genres.map((genre) => (
                    <li key={genre} className="genre-item">
                        <GenreCard genre={genre} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
