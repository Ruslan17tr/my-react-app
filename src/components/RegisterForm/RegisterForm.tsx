import './index.css';
import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { registerProfile } from "../../api/User";
import { queryClient } from "../../api/queryClient";
import { CustomInput } from '../CustomInput/CustomInput';


interface RegisterFormProps {
  onSuccess?: () => void;
  onSwitchToConfirm?: () => void;
}

export const RegisterForm = ({ onSuccess, onSwitchToConfirm }: RegisterFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const registrationMutation = useMutation({
    mutationFn: ({ email, password, name, surname }: { email: string, password: string, name: string, surname: string }) => registerProfile(email, password, name, surname),
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        setEmail('');
        setName('');
        setSurname('');
        setPassword('');
        setPasswordConfirm('');
        onSuccess?.();
      }
      onSwitchToConfirm?.();    
    },
  }, queryClient);


  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    registrationMutation.mutate({ email, password, name, surname, });
  }
  const isFormValid =
    email &&
    name &&
    surname &&
    password &&
    password === passwordConfirm;


  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <CustomInput
        type="email"
        iconId="email-icon"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Электронная почта"
        required
      />
      <CustomInput
        type="text"
        iconId="emptyuser-icon"
        placeholder="Имя"
        name="name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <CustomInput
        type="text"
        iconId="emptyuser-icon"
        placeholder="Фамилия"
        name="surname"
        onChange={(event) => setSurname(event.target.value)}
        value={surname}
      />
      <CustomInput
        type="password"
        iconId="key-icon"
        placeholder="Пароль"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <CustomInput
        type="password"
        iconId="key-icon"
        placeholder="Подтвердите пароль"
        name="passwordConfirm"
        onChange={(event) => setPasswordConfirm(event.target.value)}
        value={passwordConfirm}
      />

      {registrationMutation.error && (
        <span className="register-error">
          {registrationMutation.error.message}
        </span>
      )}

      {password && passwordConfirm && password !== passwordConfirm && (
        <span className="register-error">
          Пароли не совпадают
        </span>
      )}
      <button className="register-submit" type="submit" disabled={registrationMutation.isPending || !isFormValid}>Создать аккаунт</button>
    </form>
  );
};