import React from 'react';
import PropTypes from 'prop-types';
import classes from './carcard.module.css';
import InfoGroup from './InfoGroup/InfoGroup';
import moment from 'moment';
import {
  pricePrettier,
  momentToTr,
  selectTitle,
} from '../../../../utils/converters';

const ProductCard = (props) => {
  const {
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

  const language = 'en';
  const yetkili = sahibinden
    ? selectTitle('İletişim', 'Contact', language)
    : selectTitle('Galeri', 'Car Dealer', language);
  const ilanZaman = moment(ilanTarih).fromNow();
  const tarih = language === 'en' ? ilanZaman : momentToTr(ilanZaman);

  const infoGroupArr = [
    { title: selectTitle('Marka', 'Brand', language), data: marka },
    { title: selectTitle('Model', 'Model', language), data: model },
    { title: selectTitle('Yıl', 'Year', language), data: yil },
    { title: selectTitle('Yakıt', 'Fuel', language), data: yakit },
    { title: selectTitle('Vites', 'Transmission', language), data: vites },
    { title: yetkili, data: satici },
    {
      title: selectTitle('Fiyat', 'Price', language),
      data: pricePrettier(fiyat, paraBirimi),
    },
    { title: selectTitle('Renk', 'Price', language), data: renk },
    { title: selectTitle('İlan Tarihi', 'Posted', language), data: tarih },
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
        />
      );
    }
  });

  return (
    <div>
      <div>Image Area</div>
      <div>{info}</div>
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

/**
 *    {
      id: '604ba2ffed34280211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      fiyatGoster: false,
      ilanTarih: '2021-03-13T17:18:28.923+00:00',
    },
 */
