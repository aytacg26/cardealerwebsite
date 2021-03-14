import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Icons/Icon';
import classes from './menuitem.module.css';
import PropTypes from 'prop-types';

const MenuItem = ({ link, title, iconClass }) => {
  return (
    <Link to={link} className={classes.MenuItem}>
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
