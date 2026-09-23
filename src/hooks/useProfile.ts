import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchProfile, logoutProfile } from '../api/User';
import { queryClient } from '../api/queryClient';
import { useNavigate } from 'react-router-dom';

export const useProfile = () => {
  return useQuery({
    queryFn: fetchProfile,
    queryKey: ['users', 'me'],
    retry: false,
    staleTime: 5 * 60 * 1000,
  }, queryClient);
};



export const useLogout = () => {
const navigate = useNavigate();

  return useMutation({
    mutationFn: logoutProfile,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['users', 'me'] });
      navigate('/');
    },
  }, queryClient);
};

