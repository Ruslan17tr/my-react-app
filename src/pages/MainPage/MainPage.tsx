import { HeroSection } from '../../components/HeroSection/HeroSection';
import { CardListTop } from '../../components/CardListTop/CardListTop';
import { useRandomMovies } from '../../hooks/useMovies';
import { Loader } from '../../components/Loader/Loader';


const MainPage = () => {
  const { data: movie, isLoading, isError, refetch, isPending } = useRandomMovies();

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
    <div>
      <HeroSection movie={movie} onRefresh={refetch} />
      <CardListTop />
    </div>
  );
}

export default MainPage;