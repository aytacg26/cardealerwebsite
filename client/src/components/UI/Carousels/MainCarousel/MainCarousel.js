import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { isMobile } from '../../../../utils/isMobile';

const MainCarousel = ({
  items,
  autoPlay,
  autoPlayInterval = 5000,
  disableDotsControls,
  autoPlayControls,
  disableButtonsControls,
}) => {
  const _isMobile = isMobile();

  return (
    <AliceCarousel
      mouseTracking
      touchTracking
      items={items}
      autoHeight={true}
      autoWidth={true}
      disableButtonsControls={_isMobile ? _isMobile : disableButtonsControls}
      autoPlay={autoPlay}
      autoPlayInterval={autoPlayInterval}
      autoPlayControls={_isMobile ? !_isMobile : autoPlayControls}
      infinite={true}
      disableDotsControls={_isMobile ? _isMobile : disableDotsControls}
    />
  );
};

export default MainCarousel;
