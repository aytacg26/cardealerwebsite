import React, { Fragment } from 'react';
import classes from './infoGroup.module.css';
import PropTypes from 'prop-types';

const InfoGroup = ({ title, data }) => {
  return (
    <Fragment>
      {data ? (
        <div className={classes.InfoGroup}>
          <label>
            <strong>{title}</strong>
          </label>
          <span>{data}</span>
        </div>
      ) : null}
    </Fragment>
  );
};

InfoGroup.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default InfoGroup;
