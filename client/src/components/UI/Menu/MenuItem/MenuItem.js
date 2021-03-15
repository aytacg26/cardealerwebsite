import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Icons/Icon';
import classes from './menuitem.module.css';
import PropTypes from 'prop-types';
import menuContext from '../../../../context/menuContext/menuContext';
import { isMobile } from '../../../../utils/isMobile';

const MenuItem = ({ link, title, iconClass }) => {
  const { closeMenu } = useContext(menuContext);

  const handleMenuClick = () => {
    let count = 0;
    //A bug occurs because of timeIntervals of carousel when menuItems clicked to move other page
    //for this reason, this clears all timeOuts and timeIntervals. (Note : This bug or warning will appear on every other click on app to move other pages.)
    while (count < 1000000) {
      clearTimeout(count);
      clearInterval(count);
      count++;
    }

    if (isMobile()) {
      closeMenu();
    }
  };

  return (
    <Link to={link} className={classes.MenuItem} onClick={handleMenuClick}>
      <Icon iconClass={iconClass} styleClass='icon mg-r-15 icon-ff icon-md' />
      {title}
    </Link>
  );
};

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default MenuItem;
