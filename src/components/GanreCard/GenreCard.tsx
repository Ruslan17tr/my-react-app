import { Link } from "react-router-dom"
import './index.css'

const genreImages: Record<string, string> = {
  'action': '/genres/action.png',
  'comedy': '/genres/comedy.png',
  'drama': '/genres/drama.png',
  'horror': '/genres/horror.jpg',
  'scifi': '/genres/scifi.png',
  'fantasy': '/genres/fantasy.jpg',
  'romance': '/genres/romance.jpg',
  'thriller': '/genres/thriller.png',
  'adventure': '/genres/adventure.png',
  'animation': '/genres/animation.jpg',
  'crime': '/genres/crime.png',
  'documentary': '/genres/documentary.jpg',
  'family': '/genres/family.png',
  'history': '/genres/history.png',
  'music': '/genres/music.jpg',
  'mystery': '/genres/mystery.jpeg',
  'stand-up': '/genres/stand-up.png',
  'tv-movie': '/genres/tv-movie.png',
  'war': '/genres/war.jpg',
  'western': '/genres/western.jpg',
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
      <Link to={`/movie?genre=${genre}`} className="card-genre__link">
        <img className="card-genre__img" src={genreImages[genre] || '/default.jpg'} alt={`Постер фильма ${genre}`} />
        <span className='card-genre__name'>{genreNames[genre]}</span>
      </Link>
  )
}