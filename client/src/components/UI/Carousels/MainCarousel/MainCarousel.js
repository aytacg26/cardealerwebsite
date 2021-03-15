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
  carouselOptions,
}) => {
  return (
    <AliceCarousel
      mouseTracking
      touchTracking
      items={items}
      autoHeight={true}
      autoWidth={true}
      disableButtonsControls={isMobile() ? isMobile() : disableButtonsControls}
      autoPlay={autoPlay}
      autoPlayInterval={autoPlayInterval}
      autoPlayControls={isMobile() ? !isMobile() : autoPlayControls}
      infinite={true}
      disableDotsControls={isMobile() ? isMobile() : disableDotsControls}
    />
  );
};

export default MainCarousel;
