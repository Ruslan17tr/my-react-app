import { useState } from 'react';
import React from 'react';
import type { FC } from 'react';
import "./index.css";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from '../../api/queryClient';
import { loginProfile } from '../../api/User';
import { CustomInput } from '../CustomInput/CustomInput';
import { LoaderSecond } from '../Loader/Loader';


interface LoginFormProps {
  onSuccess?: () => void;
}


export const LoginForm: FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation(
    {
      mutationFn: ({ email, password }: { email: string; password: string }) => loginProfile(email, password),
      onSuccess: (isSuccess) => {
        if (isSuccess) {
          queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
          onSuccess?.();
        }
      },
    }, queryClient);

  

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    loginMutation.mutate({ email, password });
  }

  if(loginMutation.isPending) {
    return <div className="login-form">
      <LoaderSecond />
      </div>
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <CustomInput
        type="email"
        iconId="email-icon"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Электронная почта"
        required
        isLoading={loginMutation.isPending}
        error={loginMutation.error ? 'Неверный email или пароль' : undefined}
      />

      <CustomInput
        type="password"
        iconId="key-icon"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        required
        isLoading={loginMutation.isPending}
      />
      <button className='login-button' type='submit' disabled={loginMutation.isPending || !email || !password}>Войти</button>
      
    </form>
    

  );
}