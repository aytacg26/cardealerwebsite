import React, { Fragment, useState } from 'react';
import classes from './navbar.module.css';
import Icon from '../Icons/Icon';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Search from '../search/Search';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [menuIcon, setMenuIcon] = useState('fas fa-bars');
  const [searchIcon, setSearchIcon] = useState('fas fa-search-plus');

  const handleMenu = () => {
    setOpen((prev) => {
      if (!prev) {
        setMenuIcon('fas fa-times');

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
      } else {
        setMenuIcon('fas fa-bars');
      }

      return !prev;
    });

    setSearchIcon('fas fa-search-plus');
    setSearch(false);
  };

  const handleSearch = () => {
    setSearch((prev) => {
      if (!prev) {
        setSearchIcon('fas fa-search-minus');

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
      } else {
        setSearchIcon('fas fa-search-plus');
      }

      return !prev;
    });

    setMenuIcon('fas fa-bars');
    setOpen(false);
  };

  return (
    <Fragment>
      <div className={classes.NavbarContainer}>
        <div className={classes.activeArea}>
          <div className={classes.social}>
            <Icon
              iconClass='fab fa-facebook-square mg-lr-10 icon icon-md'
              title='KKTC Araç Bul Facebook Sayfası'
            />
            <Icon
              iconClass='fab fa-instagram-square mg-lr-10 icon icon-md'
              title='KKTC Araç Bul Instagram Sayfası'
            />
            <Icon
              iconClass='fab fa-youtube-square mg-lr-10 icon icon-md'
              title='KKTC Araç Bul Youtube Kanalı'
            />
          </div>
          <div className={classes.userLogin}>
            <Link to='/kayit'>
              <Icon
                iconClass='fas fa-user-plus mg-lr-10 icon-md'
                title='Üye Kayıt'
              />
            </Link>
          </div>
        </div>
        <div className={classes.Navbar}>
          <Link to='/'>
            <Icon
              iconClass='fas fa-home'
              styleClass='icon icon-md icon-ff mg-r-5'
            />
          </Link>
          <Icon
            iconClass={searchIcon}
            styleClass='icon icon-lg icon-ff'
            title='Detaylı veya Hızlı Arama Yap'
            clicked={handleSearch}
          />

          <Icon
            iconClass={menuIcon}
            styleClass='icon icon-lg icon-ff mg-r-5'
            title='Menü'
            clicked={handleMenu}
          />
          <Link to='/uyegiris'>
            <Icon
              iconClass='fas fa-sign-in-alt mg-lr-10 icon-lg'
              title='Üye Girişi'
            />
          </Link>
        </div>
        <Search active={search} />
        <Menu active={open} />
      </div>
    </Fragment>
  );
};

export default Navbar;
