import './index.css';
import { usePostFavorite, useDeleteFavorite, useIsFavorite } from '../../hooks/useFavorite';
import { useProfile } from '../../hooks/useProfile';
import { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';

interface FavoriteButtonProps {
  id: number;
}


export const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const isFavorite = useIsFavorite(id);
  const addFavorite = usePostFavorite();
  const removeFavorite = useDeleteFavorite();
  const { data: user, isLoading: isUserLoading } = useProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    if (isUserLoading) return;
    if (!user) {
      setIsModalOpen(true);
      return;
    }
    if (isFavorite) {
      removeFavorite.mutate(id);
    } else {
      addFavorite.mutate(id);
    }
  };

  const isLoading = addFavorite.isPending || removeFavorite.isPending;

  return (
    <div>
      <button className={`btn btn-circle ${isFavorite ? 'like--active' : ''}`} aria-label="Добавить в избранное"
        onClick={handleToggle}
        disabled={isLoading}>
        <svg width="24" height="24"  >
          <use href={`${isFavorite ? '/sprite.svg#favorite-icon' : '/sprite.svg#like-icon'}`}></use>
        </svg>
      </button>
      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )

}