import React, { useState } from 'react';
import classes from './menu.module.css';
import MenuItem from './MenuItem/MenuItem';

const Menu = ({ active }) => {
  const menuItems = [
    {
      id: 'itm-1-anasayfa',
      title: 'Ana Sayfa',
      link: '/',
      iconClass: 'fas fa-home',
    },
    {
      id: 'itm-1-galeriler',
      title: 'GALERİLER',
      link: '/galeriler',
      iconClass: 'fas fa-user-tie',
    },
    {
      id: 'itm-1-sahibinden',
      title: 'SAHİBİNDEN SATILIK',
      link: '/sahibinden',
      iconClass: 'fas fa-user',
    },
    {
      id: 'itm-1-otomobil',
      title: 'OTOMOBİL',
      link: '/otomobil',
      iconClass: 'fas fa-truck',
    },
    {
      id: 'itm-1-motosiklet',
      title: 'MOTOSİKLET',
      link: '/motosiklet',
      iconClass: 'fas fa-motorcycle',
    },
    {
      id: 'itm-1-ticari-arac',
      title: 'TİCARİ ARAÇLAR',
      link: '/ticari',
      iconClass: 'fas fa-car',
    },
    {
      id: 'itm-1-marka',
      title: 'MARKALAR',
      link: '/markalar',
      iconClass: 'fas fa-copyright',
    },
    {
      id: 'itm-1-uye-ol',
      title: 'ÜYE OL',
      link: '/kayit',
      iconClass: 'fas fa-user-plus',
    },
    {
      id: 'itm-1-uye-giris',
      title: 'ÜYE GİRİŞ',
      link: '/uyegiris',
      iconClass: 'fas fa-sign-in-alt',
    },
    {
      id: 'itm-1-reklam',
      title: 'REKLAM',
      link: '/reklam',
      iconClass: 'fas fa-registered',
    },
    {
      id: 'itm-1-hakkimizda',
      title: 'HAKKIMIZDA',
      link: '/hakkimizda',
      iconClass: 'far fa-address-card',
    },
    {
      id: 'itm-1-iletisim',
      title: 'İLETİŞİM',
      link: '/iletisim',
      iconClass: 'fas fa-phone',
    },
  ];

  //This will come from redux or context API
  const isActive = active;

  const menuClass = isActive
    ? `${classes.Menu} ${classes.active}`
    : `${classes.Menu}`;

  return (
    <div className={menuClass}>
      {menuItems.map((item) => (
        <MenuItem
          link={item.link}
          title={item.title}
          key={item.id}
          iconClass={item.iconClass}
        />
      ))}
    </div>
  );
};

export default Menu;
