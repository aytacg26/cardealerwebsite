import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Icons/Icon';
import classes from './menuitem.module.css';

const MenuItem = ({ link, title, iconClass }) => {
  return (
    <Link to={link} className={classes.MenuItem}>
      <Icon iconClass={iconClass} styleClass='icon mg-r-15 icon-ff icon-md' />
      {title}
    </Link>
  );
};

export default MenuItem;
