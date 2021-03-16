import React, { useState, useEffect } from 'react';
import MainCarousel from '../MainCarousel/MainCarousel';
import ProductCard from '../../Cards/ProductCard/ProductCard';
import { groupArray } from '../../../../utils/converters';
import { isMobile } from '../../../../utils/isMobile';

const ProductCarousel = ({ content, carouselOptions }) => {
  const [groupedArray, setGroupedArray] = useState([]);
  const [mobile, setMobile] = useState(false);

  const handleDragStart = (e) => e.preventDefault();
  const {
    autoPlay,
    autoPlayInterval,
    disableDotsControls,
    disableButtonsControls,
    autoPlayControls,
  } = carouselOptions;

  useEffect(() => {
    const _isMobile = isMobile();

    setMobile(_isMobile);

    const allProducts = content.map((item) => (
      <ProductCard {...item} key={item.id} />
    ));

    if (!mobile) {
      setGroupedArray(groupArray(allProducts, 3));
    } else {
      setGroupedArray(allProducts);
    }
  }, [content, mobile]);

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

  return (
    <MainCarousel
      items={group}
      disableDotsControls={disableDotsControls}
      autoPlayInterval={autoPlayInterval}
      autoPlay={autoPlay}
      disableButtonsControls={disableButtonsControls}
      autoPlayControls={autoPlayControls}
    />
  );
};

export default ProductCarousel;
