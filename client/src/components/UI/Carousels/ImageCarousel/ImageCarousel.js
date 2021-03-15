import React, { Fragment, useState } from 'react';
import { isMobile } from '../../../../utils/isMobile';
import ImageWindow from '../ImageWindow/ImageWindow';
import image1 from '../../../../images/test/image1.jpg';
import image2 from '../../../../images/test/image2.jpg';
import image3 from '../../../../images/test/image3.jpg';
import image4 from '../../../../images/test/CarBrands.jpg';
import MainCarousel from '../MainCarousel/MainCarousel';

const ImageCarousel = () => {
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
      linkText: 'Detay',
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

  const items = images.map((image) => (
    <ImageWindow
      source={image.src}
      key={image.id}
      name={image.name}
      text={image.text}
      hasLink={image.hasLink}
      linkText={image.linkText}
    />
  ));

  return <MainCarousel items={items} autoPlay={true} autoPlayControls={true} />;
};

export default ImageCarousel;
