import { NavLink, Link, useMatch } from "react-router-dom";

import { ModalWindow } from '../ModalWindow/ModalWindow';
import { SearchBar } from "../SearchBar/SearchBar";
import './index.css';
import { useState } from "react";
import { useProfile } from "../../hooks/useProfile";


export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: user, isLoading, } = useProfile();
  const isMatch = useMatch('/profile/*')
  const [isMobileSearch, setIsMobileSearch]= useState(false)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () =>  setIsModalOpen(false);
  
  const openMobileSearch = () => setIsMobileSearch(true);
  const closeMobileSearch = () => setIsMobileSearch(false);
  
  return (
    <div className="header">
      <nav className="header-menu">
        <Link className="header-menu__logo" to="/"><img className="header-menu__logo-icon" src='/logo-marucya-white.svg' alt="Logo" /></Link>
        <div className="header-menu__center">
          <NavLink to="/" className={({ isActive }) => isActive ? 'header-menu__link active' : 'header-menu__link'}>
            <span className="header-menu__link-text">
              Главная
            </span>
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'header-menu__link active' : 'header-menu__link'} to="/genres">
            <span className="header-menu__link-text">
              Жанры
            </span>
            <svg className="header-menu__link-icon" width="24" height="24"><use href="/sprite.svg#genre-icon"></use></svg></NavLink>
          <SearchBar isOpenMobile={isMobileSearch} onClose={closeMobileSearch} />
          <button className="header__search-mobile" onClick={openMobileSearch}>
            <svg className="search-bar__mobile-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <use href="/sprite.svg#search-icon">
              </use>
            </svg>
          </button>
        </div>
        {isLoading ? (
          <button className="header__login-btn" disabled>
            Загрузка...
          </button>
        ) : user ? (
          <div>
            <NavLink to="/profile/favorite" className={`header-menu__link ${isMatch ? 'active' : ''}`}>
              <span className="header__user-name">
                {user.name}
              </span>
              <svg className="header__user-icon" width="24" height="24"><use href="/sprite.svg#emptyuser-icon"></use></svg>
            </NavLink>
          </div>
        ) : (
          <button className="header__login-btn" onClick={openModal}>
            <span className="header__login-text">Войти</span>
            <svg className="header__user-icon" width="24" height="24"><use href="/sprite.svg#emptyuser-icon"></use></svg>
          </button>
        )}
        <ModalWindow isOpen={isModalOpen} onClose={closeModal} />
      </nav>
    </div>
  )
}