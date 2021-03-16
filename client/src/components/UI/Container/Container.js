import React, { Fragment, useEffect, useState } from 'react';
import classes from './container.module.css';
import { isMobile } from '../../../utils/isMobile';
import Footer from '../Footer/Footer';

const Container = ({ children }) => {
  const [containerClass, setContainerClass] = useState('');
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const _isMobile = isMobile();

    setMobile(_isMobile);

    if (mobile) {
      setContainerClass(`${classes.Container} ${classes.Mobile}`);
    } else {
      setContainerClass(`${classes.Container} ${classes.Desktop}`);
    }
  }, [mobile]);

  return (
    <Fragment>
      <div className={containerClass}>{children}</div>
    </Fragment>
  );
};

export default Container;
