import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { fetchFavorites, postFavorites, deleteFavorites } from "../api/Favorites";
import type { IMovie } from "../models/movies";


export const useFavorite = () => {
    return useQuery<IMovie[]>({
        queryFn: fetchFavorites,
        queryKey: ['favorites'],
        retry: false,
        staleTime: 5 * 60 * 1000,
    }, queryClient);
};

export const useIsFavorite = (id: number) => {
    const { data: favorites } = useFavorite();
    return favorites?.some(movie => movie.id === id) || false;
};

export const useDeleteFavorite = () => {
    return useMutation({
        mutationFn: (id: number) => deleteFavorites(String(id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['favorites'] });
        },
    }, queryClient);
};

export const usePostFavorite = () => {
    return useMutation({
        mutationFn: (id: number) => postFavorites(String(id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['favorites'] });
        },
    }, queryClient);
};

