import { API_URL } from './settings';

export const getGifs = async ({ category, limit = 10 }) => {
  const resp = await fetch(`${API_URL}&q=${category}&limit=${limit}`);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.original.url,
  }));

  return gifs;
};
