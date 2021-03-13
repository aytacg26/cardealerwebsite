import React, { Fragment, useState } from 'react';

import { isMobile } from '../../../utils/isMobile';
import ImageWindow from './ImageWindow/ImageWindow';
import image1 from '../../../images/test/image1.jpg';
import image2 from '../../../images/test/image2.jpg';
import image3 from '../../../images/test/image3.jpg';
import image4 from '../../../images/test/CarBrands.jpg';
import MainCarousel from './MainCarousel/MainCarousel';

const ImageCarousel = ({
  autoPlay,
  pauseAutoPlayOnHover,
  wrapAround,
  fullScreen,
  adaptiveHeight,
  draggable,
  freeScroll,
  pageDots,
  prevNextButtons,
}) => {
  const [images, setImages] = useState([
    {
      id: '12345',
      name: 'aytac',
      src: image1,
      text: null,
      hasLink: true,
      linkText: 'Detay',
    },
    {
      id: '123425',
      name: 'aytacguley',
      src: image2,
      text: null,
      hasLink: false,
    },
    {
      id: '123335',
      name: 'aytacg26',
      src: image3,
      text: null,
      hasLink: false,
    },
    {
      id: '493335',
      name: 'Aytac GULEY',
      src: image4,
      text: null,
      hasLink: false,
    },
  ]);

  //Boolean
  const options = {
    autoPlay,
    pauseAutoPlayOnHover,
    wrapAround,
    fullScreen,
    adaptiveHeight,
    draggable,
    freeScroll,
    pageDots,
    prevNextButtons,
  };

  const defaultOptions = {
    autoPlay: 7000,
    pauseAutoPlayOnHover: true,
    wrapAround: true,
    fullscreen: true,
    adaptiveHeight: true,
    draggable: true,
    freeScroll: false,
    pageDots: true,
    prevNextButtons: isMobile() ? false : true,
  };

  return (
    <MainCarousel options={defaultOptions}>
      {images.map((image) => (
        <ImageWindow
          source={image.src}
          key={image.id}
          name={image.name}
          text={image.text}
          hasLink={image.hasLink}
          linkText={image.linkText}
        />
      ))}
    </MainCarousel>
  );
};

export default ImageCarousel;

/**
 *  {children ? (
        children
      ) : (
        <Fragment>
          <div style={{ height: '95vh', background: 'black', width: '100%' }}>
            Sayfa 1
          </div>
          <div style={{ height: '95vh', background: 'red', width: '100%' }}>
            Sayfa 2
          </div>
          <div style={{ height: '95vh', background: 'pink', width: '100%' }}>
            Sayfa 3
          </div>
          <div style={{ height: '95vh', background: 'yellow', width: '100%' }}>
            Sayfa 4
          </div>
          <div style={{ height: '95vh', background: 'green', width: '100%' }}>
            Sayfa 5
          </div>
        </Fragment>
      )}
 */
