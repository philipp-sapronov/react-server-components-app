import { fetch } from 'react-fetch';
import { API_URL } from '../constants';

export const useCategories = () => {
  const items = fetch(`${API_URL}/categories`).json();
  return items || [];
};

export const useCategory = (id) => {
  if (!id) return null;
  const item = fetch(`${API_URL}/category/${id}`).json();
  return item || null;
};
