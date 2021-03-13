import React, { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';
import Button from '../Button/Button';
import classes from './search.module.css';

const Search = ({ active }) => {
  const [search, setSearch] = useState('');

  // const [details, setDetails] = useState(false);

  const handleClick = (e) => {};

  return (
    <div
      className={
        active
          ? `${classes.SearchContainer} ${classes.Active}`
          : `${classes.SearchContainer}`
      }
    >
      <div className={classes.SearchBoxArea}>
        <SearchBox value={search} change={(e) => setSearch(e.target.value)} />
      </div>
      <div className={classes.ButtonDetails}>
        <Button btnClass='button button-sm button-secondary button-shadow'>
          Ara
        </Button>
        <Button
          btnClass='button button-sm button-site button-shadow'
          btnClick={handleClick}
        >
          Detaylı Ara
        </Button>
      </div>
    </div>
  );
};

export default Search;
