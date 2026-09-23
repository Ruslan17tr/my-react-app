import './index.css';
import { useLogout, useProfile } from '../../hooks/useProfile';


const SettingsPage = () => {
  const { data: user } = useProfile();

  const logout = useLogout();

  if (!user) {
    return (
      <div className='setting-page'>
        <span className='error'>что то пошло не так</span>
      </div>
    )
  }

  const initials = user ? `${user.name[0]}${user.surname[0]}`.toUpperCase() : "?";

  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <section className='setting'>
      <div className='setting-page'>
        <div className='setting-page__user'>
          <span className='setting-page__user-initials'>{initials}</span>
          <div className='setting-page__content'>
            <div className='setting-page__info'>Имя Фамилия</div>
            <div className='setting-page__text'>{user.name} {user.surname}</div>
          </div>
        </div>
        <div className='setting-page__user'>
          <span className='setting-page__user-initials'><svg width="24" height="24"><use href='/sprite.svg#email-icon'></use></svg></span>
          <div className='setting-page__content'>
            <div className='setting-page__info'>Электронная почта</div>
            <div className='setting-page__text'>{user.email}</div>
          </div>
        </div>
      </div>
      <button className='btn btn--logout' onClick={handleLogout} disabled={logout.isPending}>Выйти из аккаунта</button>
    </section>
  )
}

export default SettingsPage;