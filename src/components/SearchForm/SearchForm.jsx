import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../css/styles.module.css';

const SearchFrom = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchInput = e => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);

    resetForm();
  };

  const resetForm = () => setQuery('');

  return (
    <form onSubmit={handleSubmit} className={css.SearchForm}>
      <input
        className={css.SearchForm__input}
        type="text"
        name="query"
        value={query}
        onChange={handleSearchInput}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button type="submit" className={css.SearchForm__button}>
        <span>Search</span>
      </button>
    </form>
  );
};

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;
