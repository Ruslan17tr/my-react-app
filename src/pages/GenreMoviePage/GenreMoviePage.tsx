import MovieList from "../../components/MovielList/MovieList";
import { useGenreMovies } from "../../hooks/useMovies"
import { useSearchParams, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { fetchGenreMovies } from '../../api/Movies';
import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import type { IMovie } from '../../models/movies';

const GenreMoviePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const genre = searchParams.get('genre');
  const movieGenre = genre || '';
  const [movie, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const { data: movie, isLoading, isError, refetch } = useGenreMovies(movieGenre);


  // useEffect(() => {
  //   if (genre) refetch();
  // }, [genre, refetch]);



  const getData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (!genre) {
        throw new Error('Жанр не указан');
      }

      const data = await fetchGenreMovies(genre);
      setMovies(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки');
    } finally {
      setLoading(false);
    }
  }, [genre]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (loading) {
    return <div className="genre-movies"><Loader /></div>;
  }

  if (error || !movie) {
    return (
      <div className="genre-movies">
        <div className="hero" style={{ color: 'red' }}>
          Не удалось загрузить фильм
        </div>
      </div>
    );
  }


  return (
    <MovieList  movie={movie} genre={movieGenre} onBack={() => navigate(-1)} />
  )
}

export default GenreMoviePage;