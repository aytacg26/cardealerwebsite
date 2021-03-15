import React, { Fragment } from 'react';
import classes from './infoGroup.module.css';
import PropTypes from 'prop-types';

const InfoGroup = ({ title, data, mobile }) => {
  return (
    <Fragment>
      {data ? (
        <div className={classes.InfoGroup}>
          <Fragment>
            <label>
              <strong>{title}</strong>
            </label>
            <span className='mg-l-5 mg-r-5'>
              <strong>:</strong>
            </span>
          </Fragment>
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
