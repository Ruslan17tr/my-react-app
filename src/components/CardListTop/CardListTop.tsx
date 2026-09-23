import type { IMovie } from '../../models/movies';
import './index.css';
import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { fetchTopMovies } from '../../api/Movies';
import { CardTop } from '../CardTop/CardTop';


export const CardListTop: FC = () => {
  const [movie, setMovie] = useState<IMovie[]>([]);

  const getData = async (): Promise<void> => {
    const data = await fetchTopMovies();
    console.log('data:', data);
    setMovie(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className='top-movies'>
      <h2 className="top-movies__title">Топ 10 фильмов</h2>
      <ol className="top-movies__list">
        {movie.map((movie) => (
          <li key={movie.id} className="top-movies__item">
            <CardTop movie={movie} />
          </li>
        ))}
      </ol>
    </section>
  )
}
