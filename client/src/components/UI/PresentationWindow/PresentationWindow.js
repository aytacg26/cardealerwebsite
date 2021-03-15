import React, { useState, useEffect } from 'react';
import classes from './presentationwindow.module.css';
import Icon from '../Icons/Icon';
import { isMobile } from '../../../utils/isMobile';
import { groupArray } from '../../../utils/converters';
import ProductCard from '../Cards/ProductCard/ProductCard';
import PropTypes from 'prop-types';
//import useMediaQuery from '../../../customHooks/useMediaQuery';
import MainCarousel from '../Carousels/MainCarousel/MainCarousel';
import { Link } from 'react-router-dom';

const PresentationWindow = ({
  title,
  content,
  iconClass,
  carouselOptions,
  linkToPage,
}) => {
  //const { width, height } = useMediaQuery();

  const [groupedArray, setGroupedArray] = useState([]);
  const handleDragStart = (e) => e.preventDefault();
  const {
    hasCarousel,
    autoPlay,
    autoPlayInterval,
    disableDotsControls,
    disableButtonsControls,
    autoPlayControls,
  } = carouselOptions;

  const groupSize = 3;

  useEffect(() => {
    const allProducts = content.map((item) => (
      <ProductCard {...item} key={item.id} />
    ));

    if (!isMobile()) {
      setGroupedArray(groupArray(allProducts, groupSize));
    } else {
      setGroupedArray(allProducts);
    }
  }, [content]);

  const windowClass = isMobile()
    ? `${classes.WindowContainer}`
    : `${classes.WindowContainer} ${classes.Desktop}`;

  const group = groupedArray.map((group, index) => (
    <div
      style={{
        width: '100%',
        height: 'max-content',
        display: 'flex',
        justifyContent: group.length === 1 ? 'flex-start' : 'space-evenly',
        padding: '5px',
      }}
      key={`productGroup-${index}`}
      onDragStart={handleDragStart}
    >
      {group}
    </div>
  ));

  //Window for Desktop
  //There is a bug on MainCarousel, It should be solved asap, or I have to create my own carousel for ShowCase
  const window =
    content.length > 0 ? (
      <div className={windowClass} style={{ height: 'max-content' }}>
        <div className={classes.LabelArea}>
          <Icon iconClass={iconClass} styleClass='icon-site-color mg-r-10' />
          <span>{title}</span>
          <Link to={linkToPage} style={{ color: 'blue' }}>
            Tümü
          </Link>
        </div>
        {hasCarousel ? (
          <MainCarousel
            items={group}
            disableDotsControls={disableDotsControls}
            autoPlayInterval={autoPlayInterval}
            autoPlay={autoPlay}
            disableButtonsControls={disableButtonsControls}
            autoPlayControls={autoPlayControls}
          />
        ) : (
          <div>Diger İşlemler</div>
        )}
      </div>
    ) : null;

  return window;
};

PresentationWindow.defaultProps = {
  carouselOptions: {
    hasCarousel: false,
    autoPlay: false,
    autoPlayInterval: 8000,
    disableDotsControls: true,
    disableButtonsControls: true,
  },
  linkToPage: '/',
};

PresentationWindow.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array.isRequired,
  iconClass: PropTypes.string,
  carouselOptions: PropTypes.object.isRequired,
  linkToPage: PropTypes.string.isRequired,
};

export default PresentationWindow;
