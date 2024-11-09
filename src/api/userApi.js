import apiClient from './apiClient';

export const fetchUsers = async () => {
  const response = await apiClient.get('/users');
  return response.data;
};
