import './index.css'
import { CardTop } from "../../components/CardTop/CardTop";
import { useDeleteFavorite, useFavorite } from '../../hooks/useFavorite';
import { Loader } from '../../components/Loader/Loader';

const FavoritePage = () => {
  const { data: movies, isLoading } = useFavorite();
  const removeFavorite = useDeleteFavorite();

 
 if (isLoading) {
  return (<div className="favorite-page">
    <Loader />
  </div>
  )};
 
  if (!movies?.length) {
    return (
      <div className="favorite-page">
        <p className="favorite-page__empty">У вас пока нет избранных фильмов</p>
      </div>
    );
  };



  return (
    <div className="favorite-page">
      <ul className="favorite-page__list">
        { movies.map((movie) => 
          (<li className="favorite-page__item" key={movie.id}>
          <CardTop movie={movie} />
          <button
            className="btn-circle--delete"
            onClick={() => removeFavorite.mutate(movie.id)}
            disabled={removeFavorite.isPending}
          >
            <svg width="24" height="24">
              <use href="/sprite.svg#close-large" />
            </svg>
          </button>
        </li>))}
      </ul>
    </div>
  )
}

export default FavoritePage;


