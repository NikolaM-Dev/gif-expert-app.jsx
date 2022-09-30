import { useEffect } from 'react';
import { useState } from 'react';

import { getGifs } from '../services/getGifs';

export const useFetchGifs = ({ category }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ category }).then((gifs) => {
      setGifs(gifs);
      setIsLoading(false);
    });
  }, [category]);

  return { gifs, isLoading };
};
