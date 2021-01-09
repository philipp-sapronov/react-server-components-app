import { fetch } from 'react-fetch';
import { API_URL } from '../constants';

export const useCategories = () => {
  const response = fetch(`${API_URL}/categories`).json();

  if (!response || response instanceof Error) return [];
  return response.data || [];
};

export const useCategory = (id) => {
  if (!id) return null;
  const response = fetch(`${API_URL}/category/${id}`).json();

  if (!response || response instanceof Error) return null;
  return response.data || null;
};
