import React, { Fragment } from 'react';
import classes from './container.module.css';
import { isMobile } from '../../../utils/isMobile';
import Footer from '../Footer/Footer';

const Container = ({ children }) => {
  const _isMobile = isMobile();

  console.log(_isMobile);
  const containerClass = _isMobile
    ? `${classes.Container} ${classes.Mobile}`
    : `${classes.Container} ${classes.Desktop}`;

  console.log(containerClass);

  return (
    <Fragment>
      <div className={containerClass}>{children}</div>
    </Fragment>
  );
};

export default Container;
