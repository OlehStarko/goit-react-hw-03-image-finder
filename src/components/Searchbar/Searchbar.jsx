import PropTypes from 'prop-types';
import SearchFrom from '../SearchForm/SearchForm';
import css from '../css/styles.module.css';

const Searchbar = ({ onSearch }) => (
  <header className={css.Searchbar}>
    <SearchFrom onSearch={onSearch} />
  </header>
);

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
