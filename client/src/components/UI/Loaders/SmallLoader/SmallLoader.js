import React from 'react';
import classes from './smallLoader.module.css';

const SmallLoader = () => {
  return (
    <div className={classes['LoaderContainer']}>
      <div className={classes['yellow']}></div>
      <div className={classes['red']}></div>
      <div className={classes['blue']}></div>
      <div className={classes['violet']}></div>
    </div>
  );
};

export default SmallLoader;
