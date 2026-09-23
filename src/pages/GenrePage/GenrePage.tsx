import { useGenre } from "../../hooks/useMovies"
import { Loader } from "../../components/Loader/Loader";
import { GenreList } from "../../components/GanreList/GanreList";



const GenrePage = () => {
  const { data: genre, isLoading, isPending, isError } = useGenre();

  if (isLoading || isPending) {
    return <div className="hero"><Loader /></div>;
  }

  if (isError || !genre) {
    return (
      <div className="main-page">
        <div className="hero" style={{ color: 'red' }}>
          Не удалось загрузить фильм
        </div>
      </div>
    );
  }

  return (
    <GenreList genres={genre} />
  )
};

export default GenrePage;