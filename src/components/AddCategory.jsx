import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = inputValue.trim();

    if (newCategory.length <= 2) return;

    onNewCategory(newCategory);
    setInputValue('');
  };

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search gifs"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
