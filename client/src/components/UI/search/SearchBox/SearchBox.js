import React from 'react';
import Icon from '../../Icons/Icon';
import classes from './searchbox.module.css';

const SearchBox = ({ change, value }) => {
  return (
    <div className={classes.SearchBoxArea}>
      <Icon iconClass='fas fa-search' />
      <input
        type='search'
        name='search'
        placeholder='Sitede Ara...'
        onChange={change}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
