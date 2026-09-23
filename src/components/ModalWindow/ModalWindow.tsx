import "./index.css";
import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { RegisterConfirm } from "../RegisterConfirm/RegisterConfirm";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWindow = ({ isOpen, onClose }: LoginModalProps) => {
  const [step, setStep] = useState<'login' | 'register' | 'confirm'>('login');

  if (!isOpen) return null;

  return (
    <div className="modal__overlay" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal__window">
        <button className="modal__close" onClick={onClose}><svg width="24" height="24"><use href="/sprite.svg#close-large"></use></svg></button>
        <div className="modal__content">
          <img src="./logo-marucya-black.svg" alt='Logo' className="modal__logo" />
          {step === 'login' && (
            <div className="modal__wrapper">
              <LoginForm onSuccess={onClose} />

              <button
                className="modal__switch"
                onClick={() => setStep('register')}
              >
                Регистрация
              </button>
            </div>
          )}

          {step === 'register' && (
            <div className="modal__wrapper">
              <h2 className="modal-window__title">Регистрация</h2>
              <RegisterForm
                onSuccess={() => setStep('confirm')}
              /> <button
                type="button"
                className="register-switch"
                onClick={() => setStep('login')}
              >
                Уже есть аккаунт? Войти
              </button>
            </div>
          )}

          {step === 'confirm' && (
            <div className="modal__wrapper">
              <h2>Подтверждение регистрации</h2>
              <RegisterConfirm
                onSwitchToLogin={() => setStep('login')}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
