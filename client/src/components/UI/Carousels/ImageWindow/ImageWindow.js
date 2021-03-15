import React, { Fragment } from 'react';
import classes from './imagewindow.module.css';
import Button from '../../Button/Button';

const ImageWindow = ({ source, name, text, hasLink, linkText, directLink }) => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div
      style={{
        width: '100%',
        height: '40vh',
        color: '#fff',
      }}
    >
      <img
        src={source}
        alt={name}
        name={name}
        className={classes.Image}
        onDragStart={handleDragStart}
      />
      {text || hasLink ? (
        <div className={classes.TextBand}>
          <span>{text}</span>
          {hasLink && linkText ? (
            <Button btnClass='button button-x-sm button-trans mg-lr-10 button-site-text button-dashed'>
              {linkText}
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default ImageWindow;
