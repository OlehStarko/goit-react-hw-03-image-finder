import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../css/styles.module.css';

class SearchFrom extends Component {
  state = {
    query: '',
  };

  handleSearchInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query) return;

    this.props.onSearch(this.state.query);

    this.resetForm();
  };

  resetForm = () =>
    this.setState({
      query: '',
    });

  render() {
    return (
      <form className={css.SearchForm} onSubmit={this.handleSubmit}>
        <input
          className={css.SearchForm__input}
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.SearchForm__button} type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;
