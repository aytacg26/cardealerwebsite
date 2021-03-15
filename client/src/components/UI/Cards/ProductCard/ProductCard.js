import React from 'react';
import PropTypes from 'prop-types';
import classes from './productCard.module.css';
import InfoGroup from './InfoGroup/InfoGroup';
import { isMobile } from '../../../../utils/isMobile';

import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  pricePrettier,
  momentToTr,
  selectTitle,
} from '../../../../utils/converters';

const ProductCard = (props) => {
  const {
    id,
    marka,
    model,
    yil,
    yakit,
    vites,
    satici,
    fiyat,
    paraBirimi,
    renk,
    sahibinden,
    galeri,
    fiyatGoster,
    ilanTarih,
    resimler,
  } = props;

  const cardClass = isMobile()
    ? `${classes.ProductCard}`
    : `${classes.ProductCardDesktop}`;

  //TODO : language should come from localStorage, add language selection option to Navbar
  const language = 'tr';
  const yetkili = sahibinden
    ? selectTitle('İletişim', 'Contact', language)
    : selectTitle('Galeri', 'Car Dealer', language);
  const ilanZaman = moment(ilanTarih).fromNow();
  const tarih = language === 'en' ? ilanZaman : momentToTr(ilanZaman);

  const infoGroupArr = [
    { title: selectTitle('Marka', 'Brand', language), data: marka },
    { title: selectTitle('Model', 'Model', language), data: model },
    { title: selectTitle('Yıl', 'Year', language), data: yil },
    { title: yetkili, data: satici },
    {
      title: selectTitle('Fiyat', 'Price', language),
      data: fiyat ? pricePrettier(fiyat, paraBirimi) : 0,
    },
    { title: selectTitle('Yayınlanma', 'Posted', language), data: tarih },
  ];

  const info = infoGroupArr.map((inf, index) => {
    if (inf.title === 'Fiyat' && !fiyatGoster) {
      return null;
    } else {
      return (
        <InfoGroup
          title={inf.title}
          data={inf.data}
          key={`${inf.title}-${index}`}
          mobile={isMobile()}
        />
      );
    }
  });

  return (
    <div className={cardClass}>
      <div className={classes.imageAlan}>
        <img
          src={resimler ? resimler[0] : ''}
          alt={`${marka} ${model} ${yil}`}
          title={`${marka} ${model} ${yil}`}
        />
      </div>
      <div className={classes.infoAlan}>{info}</div>
      <div className={classes.YayinDetayAlan}>
        <Link to={`/car/${id}`} className={classes.YayinDetay}>
          Detay
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  marka: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  yil: PropTypes.string.isRequired,
  yakit: PropTypes.string,
  vites: PropTypes.string,
  fiyat: PropTypes.string,
  paraBirimi: PropTypes.string,
  renk: PropTypes.string,
  fiyatGoster: PropTypes.bool.isRequired,
  ilanTarih: PropTypes.string.isRequired,
  resimler: PropTypes.array.isRequired,
};

export default ProductCard;
