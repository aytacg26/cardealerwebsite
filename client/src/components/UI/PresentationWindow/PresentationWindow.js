import React, { useState, useEffect } from 'react';
import classes from './presentationwindow.module.css';
import Icon from '../Icons/Icon';
import { isMobile } from '../../../utils/isMobile';
import { groupArray } from '../../../utils/converters';
import ProductCard from '../Cards/ProductCard/ProductCard';
import PropTypes from 'prop-types';
import MainCarousel from '../Carousels/MainCarousel/MainCarousel';
import useMediaQuery from '../../../customHooks/useMediaQuery';

const PresentationWindow = ({ title, content, iconClass }) => {
  const { width, height } = useMediaQuery();

  const windowClass = isMobile()
    ? `${classes.WindowContainer}`
    : `${classes.WindowContainer} ${classes.Desktop}`;

  const allProducts = content.map((item) => (
    <ProductCard {...item} key={item.id} />
  ));

  let windowHeight = 600;

  let groupSize = width >= 600 && width <= 1281 && !isMobile() ? 2 : 3;
  windowHeight = width > 800 && width <= 1281 && !isMobile() ? 580 : 580;

  const groupedArray = groupArray(allProducts, groupSize);

  //Window for Desktop
  //There is a bug on MainCarousel, It should be solved asap, or I have to create my own carousel for ShowCase
  const window =
    content.length > 0 ? (
      <div className={windowClass} style={{ height: windowHeight }}>
        <div className={classes.LabelArea}>
          <Icon iconClass={iconClass} styleClass='icon-site-color mg-r-10' />
          <span>{title}</span>
        </div>

        <MainCarousel options={defaultOptions}>
          {groupedArray.map((group, index) => (
            <div
              style={{
                width: '100%',
                height: '63vh',
                display: 'flex',
                justifyContent: 'space-evenly',
                padding: '5px',
              }}
              key={`productGroup-${index}`}
            >
              {group}
            </div>
          ))}
        </MainCarousel>
      </div>
    ) : null;

  return window;
};

const defaultOptions = {
  autoPlay: 8000,
  pauseAutoPlayOnHover: true,
  wrapAround: true,
  fullscreen: true,
  adaptiveHeight: true,
  draggable: true,
  freeScroll: false,
  pageDots: true,
  groupCells: true,
  prevNextButtons: isMobile() ? false : true,
};

PresentationWindow.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array.isRequired,
  iconClass: PropTypes.string,
};

// function getProductWindowSizes(width) {
//   if (width >= 800 && width < 900) {
//     return { groupSize: 2, windowHeight: 460, groupWrapperHeight: '60vh' };
//   } else if (width >= 900 && width < 950) {
//     return { groupSize: 2, windowHeight: 470, groupWrapperHeight: '53vh' };
//   } else if (width >= 950 && width < 1149) {
//     return { groupSize: 2, windowHeight: 440, groupWrapperHeight: '47vh' };
//   } else if (width >= 1149 && width <= 1200) {
//     return { groupSize: 1, windowHeight: 580, groupWrapperHeight: '70vh' };
//   } else if (width > 1200 && width <= 1300) {
//     return { groupSize: 2, windowHeight: 580, groupWrapperHeight: '63vh' };
//   }
// }

export default PresentationWindow;
