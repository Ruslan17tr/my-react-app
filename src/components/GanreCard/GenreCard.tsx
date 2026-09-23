import { Link } from "react-router-dom"
import './index.css'

const genreImages: Record<string, string> = {
  'action': '../../../public/genres/action.png',
  'comedy': '../../../public/genres/comedy.png',
  'drama': '../../../public/genres/drama.png',
  'horror': '../../../public/genres/horror.jpg',
  'scifi': '../../../public/genres/scifi.png',
  'fantasy': '../../../public/genres/fantasy.jpg',
  'romance': '../../../public/genres/romance.jpg',
  'thriller': '../../../public/genres/thriller.png',
  'adventure': '../../../public/genres/adventure.png',
  'animation': '../../../public/genres/animation.jpg',
  'crime': '../../../public/genres/crime.png',
  'documentary': '../../../public/genres/documentary.jpg',
  'family': '../../../public/genres/family.png',
  'history': '../../../public/genres/history.png',
  'music': '../../../public/genres/music.jpg',
  'mystery': '../../../public/genres/mystery.jpeg',
  'stand-up': '../../../public/genres/stand-up.png',
  'tv-movie': '../../../public/genres/tv-movie.png',
  'war': '../../../public/genres/war.jpg',
  'western': '../../../public/genres/western.jpg',
};

export const genreNames: Record<string, string> = {
  'action': 'Боевик',
  'comedy': 'Комедия',
  'drama': 'Драма',
  'horror': 'Ужасы',
  'scifi': 'Научная фантастика',
  'fantasy': 'Фэнтези',
  'romance': 'Романтика',
  'thriller': 'Триллер',
  'adventure': 'Приключения',
  'animation': 'Анимация',
  'crime': 'Криминал',
  'documentary': 'Документальный',
  'family': 'Семейный',
  'history': 'Исторический',
  'music': 'Музыкальный',
  'mystery': 'Детектив',
  'stand-up': 'Стендап',
  'tv-movie': 'Телевизионный фильм',
  'war': 'Военный',
  'western': 'Вестерн'
};


export const GenreCard: React.FC<{ genre: string }> = ({ genre }) => {

  return (
      <Link to={`/movie?genre=${genre}`} key={genre} className="card-genre__link">
        <img className="card-genre__img" src={genreImages[genre] || '../../../public/genres/adventure.png'} alt={`Постер фильма ${genre}`} />
        <span className='card-genre__name'>{genreNames[genre]}</span>
      </Link>
  )
}