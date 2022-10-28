import PropTypes from 'prop-types';
import css from '../css/styles.module.css';

const Message = ({ children }) => (
  <div className={css.error__message}>{children}</div>
);

Message.defaultProps = {
  children: [],
};

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;
