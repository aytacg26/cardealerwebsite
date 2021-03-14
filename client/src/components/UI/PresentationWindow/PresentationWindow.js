import React, { useState } from 'react';
import classes from './presentationwindow.module.css';
import Icon from '../Icons/Icon';
import { isMobile } from '../../../utils/isMobile';
import ProductCard from '../Cards/ProductCard/ProductCard';
import PropTypes from 'prop-types';
import MainCarousel from '../Carousels/MainCarousel/MainCarousel';

const PresentationWindow = ({ title, content, iconClass }) => {
  const windowClass = isMobile()
    ? `${classes.WindowContainer}`
    : `${classes.WindowContainer} ${classes.Desktop}`;

  const contentClass = isMobile()
    ? `${classes.ContentArea}`
    : `${classes.ContentArea} ${classes.Desktop}`;

  const [showcase, setShowcase] = useState({
    title: 'Kapat',
    iconClass: 'fas fa-eye',
    isClosed: true,
  });

  const handleWindow = () => {
    if (!showcase.isClosed) {
      setShowcase({
        title: 'Aç',
        iconClass: 'fas fa-eye',
        isClosed: true,
      });
    } else {
      setShowcase({
        title: 'Kapat',
        iconClass: 'fas fa-eye-slash',
        isClosed: false,
      });
    }
  };

  const pWClass = !showcase.isClosed
    ? `${windowClass}`
    : `${windowClass} ${classes.Closed}`;

  const contentAreaClass = !showcase.isClosed
    ? `${contentClass}`
    : `${contentClass} ${classes.Closed}`;

  const window =
    content.length > 0 ? (
      <div className={pWClass}>
        <div className={classes.LabelArea} onClick={handleWindow}>
          <Icon iconClass={iconClass} styleClass='icon-site-color mg-r-10' />
          <span>{title}</span>
          <Icon
            iconClass={showcase.iconClass}
            styleClass='icon mg-r-15 icon-site-color'
            title={showcase.title}
          />
        </div>
        <div className={contentAreaClass}>
          {!showcase.isClosed
            ? content.map((item) => <ProductCard {...item} key={item.id} />)
            : null}
        </div>
      </div>
    ) : null;

  return window;
};

PresentationWindow.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array.isRequired,
  iconClass: PropTypes.string,
};

export default PresentationWindow;
