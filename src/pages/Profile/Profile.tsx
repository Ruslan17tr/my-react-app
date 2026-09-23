import './index.css';
import { NavLink, Outlet } from 'react-router-dom';
import type { FC } from 'react';



const Profile: FC = ( ) => {

  return(
  <section className='profile'>
    <h2 className='profile__title'>Мой аккаунт</h2>
    <nav className='profile__nav'>
      <NavLink className={({ isActive }) => isActive ? 'profile__menu-link active' : 'profile__menu-link' } to='/profile/favorite'>
        <svg width="24" height="24" >
          <use href='/sprite.svg#like-icon'></use>
        </svg>Избранные фильмы
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? 'profile__menu-link active' : 'profile__menu-link'} to='/profile/settings'>
        <svg width="24" height="24">
          <use href='/sprite.svg#emptyuser-icon'></use>
        </svg>
        Настройка аккаунта
      </NavLink>
    </nav>
    <Outlet />
  </section>
  )
}

export default Profile