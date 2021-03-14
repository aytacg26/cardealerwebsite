import React, { Fragment } from 'react';
import classes from './infoGroup.module.css';
import PropTypes from 'prop-types';

const InfoGroup = ({ title, data, mobile }) => {
  const labeling = !mobile ? (
    <Fragment>
      <label>
        <strong>{title}</strong>
      </label>
      <span className='mg-l-5 mg-r-5'>
        <strong>:</strong>
      </span>
    </Fragment>
  ) : null;

  const infoClass = !mobile
    ? `${classes.InfoGroup}`
    : `${classes.InfoGroupMobile}`;

  return (
    <Fragment>
      {data ? (
        <div className={infoClass}>
          {labeling}
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
