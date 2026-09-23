import { AboutMovie } from '../../components/MovieCard/AboutMovie'
import { useParams } from 'react-router-dom';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { useFetchMovies } from '../../hooks/useMovies';
import { Loader } from '../../components/Loader/Loader';

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id)
  const { data: movie, isLoading, isPending, isError } = useFetchMovies(movieId);

  if (isLoading || isPending) {
    return <div className="hero"><Loader /></div>;
  }

  if (isError || !movie) {
    return (
      <div className="main-page">
        <div className="hero" style={{ color: 'red' }}>
          Не удалось загрузить фильм
        </div>
      </div>
    );
  }

  return (
    <section className="movie-card__container">
      <HeroSection movie={movie} />
      <AboutMovie movie={movie} />
    </section>
  )
}

export default MoviePage;