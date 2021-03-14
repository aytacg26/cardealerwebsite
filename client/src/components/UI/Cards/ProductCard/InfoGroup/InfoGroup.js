import React, { Fragment } from 'react';
import classes from './infoGroup.module.css';

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

export default InfoGroup;
