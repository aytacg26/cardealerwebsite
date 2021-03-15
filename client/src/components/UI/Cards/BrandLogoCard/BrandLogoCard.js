import React, { useState, useEffect } from 'react';
import classes from './brandlogocard.module.css';
import { isMobile } from '../../../../utils/isMobile';
import { Link } from 'react-router-dom';

const BrandLogoCard = ({ id, image, company, brand }) => {
  const [logoAreaClass, setLogoAreaClass] = useState(
    `${classes.BrandLogoArea}`
  );

  useEffect(() => {
    const mobile = isMobile();

    if (!mobile) {
      setLogoAreaClass(`${classes.BrandLogoArea}`);
    } else {
      setLogoAreaClass(`${classes.BrandLogoAreaMobile}`);
    }
  }, []);

  return (
    <Link to={`/markalar/${id}`} className={logoAreaClass}>
      <img src={image} title={`${company} - ${brand}`} alt={brand} />
      <label>{brand}</label>
    </Link>
  );
};

export default BrandLogoCard;
