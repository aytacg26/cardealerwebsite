import React, { useState, useEffect } from 'react';
import classes from './presentationwindow.module.css';
import Icon from '../Icons/Icon';
import { isMobile } from '../../../utils/isMobile';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PresentationWindow = ({
  title,
  iconClass,
  linkToPage,
  children,
  contentAreaClass,
}) => {
  const [windowClass, setWindowClass] = useState(
    `${classes.WindowContainer} ${classes.Desktop}`
  );

  useEffect(() => {
    const mobile = isMobile();

    if (!mobile) {
      setWindowClass(`${classes.WindowContainer} ${classes.Desktop}`);
    } else {
      setWindowClass(`${classes.WindowContainer}`);
    }
  }, []);

  const window = (
    <div className={windowClass} style={{ height: 'max-content' }}>
      <div className={classes.LabelArea}>
        <Icon iconClass={iconClass} styleClass='icon-site-color mg-r-10' />
        <span>{title}</span>
        <Link to={linkToPage} style={{ color: 'blue' }}>
          Tümü
        </Link>
      </div>
      <div className={contentAreaClass}>{children}</div>
    </div>
  );

  return window;
};

PresentationWindow.defaultProps = {
  linkToPage: '/',
};

PresentationWindow.propTypes = {
  title: PropTypes.string,
  iconClass: PropTypes.string,
  linkToPage: PropTypes.string.isRequired,
};

export default PresentationWindow;
