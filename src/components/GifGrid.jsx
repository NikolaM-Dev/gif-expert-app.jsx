import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks';

import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs({ category });

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {gifs.map(({ id, title, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
