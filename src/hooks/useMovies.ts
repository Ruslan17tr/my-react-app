import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { fetchMovies, fetchRandomMovies, fetchGenreMovies, fetchGenres } from "../api/Movies";

export const useRandomMovies = () => {
  return useQuery({
    queryFn: fetchRandomMovies,
    queryKey: ['movies', 'random'],
    retry: false,
    staleTime: 0,
  }, queryClient);
};

export const useFetchMovies = (id: number) => {
  return useQuery({
    queryFn: () => fetchMovies(id),
    queryKey: ['movies', id],
    retry: false,
  }, queryClient)
}

export const useGenreMovies = (genre: string) => {
  return useQuery({
    queryFn: () => fetchGenreMovies(genre),
    queryKey: ['movies', 'genre', genre],
    retry: true,
    staleTime: 0,
    refetchOnWindowFocus:false,
  }, queryClient)
}

export const useGenre = () => {
  return useQuery({
    queryFn: fetchGenres,
    queryKey: ['genres'],
    retry: false,
  }, queryClient)
}

