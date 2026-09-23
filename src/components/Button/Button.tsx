import type { FC, HTMLAttributes } from "react";
import { useDeleteFavorite } from '../../hooks/useFavorite';
import "./index.css";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  kind?: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
}

interface FavoriteDeleteButtonProps {
  id: number;
}

export const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  className,
  kind = "primary",
  type,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={className}
      data-kind={kind}
      {...props}
    >
      {children}
    </button>
  );
};




export const FavoriteDeleteButton = ({ id }: FavoriteDeleteButtonProps) => {
  const removeFavorite = useDeleteFavorite();

  const handleDelete = () => {
    removeFavorite.mutate(id);
  };

  return (
    <button
      className="btn-circle--delete"
      onClick={handleDelete}
      disabled={removeFavorite.isPending}
    >
      <svg width="24" height="24">
        <use href="/sprite.svg#close-large" />
      </svg>
    </button>
  );
};