import MovieList from "../../components/MovielList/MovieList";
import { useGenreMovies } from "../../hooks/useMovies"
import { useSearchParams, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import {  useEffect } from 'react';


const GenreMoviePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const genre = searchParams.get('genre');
  const movieGenre = genre || '';

  const { data: movie, isLoading, isError, refetch } = useGenreMovies(movieGenre);

  useEffect(() => {
    if (genre) refetch();
  }, [genre, refetch]);


  if (isLoading) {
    return <div className="genre-movies"><Loader /></div>;
  }

  if (isError || !movie) {
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