import PropTypes from 'prop-types';
import css from '../css/styles.module.css';

const Button = ({ onClick }) => (
  <div>
    <button className={css.loadMore} type="button" onClick={onClick}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
