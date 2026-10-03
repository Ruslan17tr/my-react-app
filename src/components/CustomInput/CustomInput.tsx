import type { FC, InputHTMLAttributes } from "react";
import './index.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  iconId?: string;
  error?: string;
  isLoading?: boolean;
}

export const CustomInput: FC<IInputProps> = ({ 
  type = 'text',
  name,
  iconId,
  error,
  isLoading = false,
  value,
  onChange,
  placeholder,
  required = false,
  disabled,
  ...props
}) => {
  return (
    <div className='custom-input'>
        <input
          className="custom-input__field"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={isLoading || disabled}
          {...props}
        />
        {iconId && (
          <svg className="custom-input__icon" width="24" height="24">
            <use href={`/sprite.svg#${iconId}`} />
          </svg>
        )}
      {error && (
        <span className="custom-input__error">{error}</span>
      )}
    </div>
  );
};