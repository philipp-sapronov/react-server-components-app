import { fetch } from 'react-fetch';
import { API_URL } from '../constants';

export const useContacts = (categoryId) => {
  const id = categoryId ? '/' + categoryId : '';
  const items = fetch(`${API_URL}/contacts${id}`).json();
  return items || [];
};

export const useContact = (id) => {
  if (!id) return null;
  const response = fetch(`${API_URL}/contact/${id}`).json();

  if (response instanceof Error) return null;
  return response;
};

export const useComingBirthdays = (count = 5) => {
  const items = fetch(`${API_URL}/birthdays/${count}`).json();

  return Array.isArray(items) ? items : [];
};
