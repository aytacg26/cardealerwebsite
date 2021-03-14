import React, { useState } from 'react';
import classes from './presentationwindow.module.css';
import Icon from '../Icons/Icon';
import { isMobile } from '../../../utils/isMobile';
import ProductCard from '../Cards/ProductCard/ProductCard';
import PropTypes from 'prop-types';

const PresentationWindow = ({ title, content, iconClass }) => {
  const windowClass = isMobile()
    ? `${classes.WindowContainer}`
    : `${classes.WindowContainer} ${classes.Desktop}`;

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

  const window = content ? (
    <div
      className={
        !showcase.isClosed
          ? `${windowClass}`
          : `${windowClass} ${classes.Closed}`
      }
      onClick={handleWindow}
      style={{ cursor: 'pointer' }}
    >
      <div className={classes.LabelArea}>
        <Icon iconClass={iconClass} styleClass='icon-site-color mg-r-10' />
        <span>{title}</span>
        <Icon
          iconClass={showcase.iconClass}
          styleClass='icon mg-r-15 icon-site-color'
          title={showcase.title}
        />
      </div>
      <div
        className={
          !showcase.isClosed
            ? `${classes.ContentArea}`
            : `${classes.ContentArea} ${classes.Closed}`
        }
      >
        {!showcase.isClosed ? (
          <div>
            {content.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                model={item.model}
                marka={item.marka}
                yil={item.yil}
                fiyat={item.fiyat}
                yakit={item.yakit}
                vites={item.vites}
                satici={item.satici}
                renk={item.renk}
                sahibinden={item.sahibinden}
                galeri={item.galeri}
                fiyatGoster={item.fiyatGoster}
                paraBirimi={item.paraBirimi}
                ilanTarih={item.ilanTarih}
                resimler={item.resimler}
              />
            ))}
          </div>
        ) : null}
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
