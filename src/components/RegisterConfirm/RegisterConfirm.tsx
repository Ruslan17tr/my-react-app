import './index.css';

interface RegisterConfirmProps {
  onSwitchToLogin: () => void; // 👈 Пропс для переключения на форму входа
}


export const RegisterConfirm = ({ onSwitchToLogin }: RegisterConfirmProps) => {


  const handleClick = () => {
    onSwitchToLogin();
  }

  return (
    <div className="register-confirm">
      <h3 className="register-confirm__title">Регистрация завершена</h3>
      <span className="register-confirm__text">Используйте вашу электронную почту для входа</span>
      <button className="register-confirm__button" onClick={handleClick} >
        Войти
      </button>
    </div>
  )
}