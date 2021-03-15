import React, { Fragment, useState, lazy, Suspense, useContext } from 'react';
import classes from './navbar.module.css';
import Icon from '../Icons/Icon';
import { Link } from 'react-router-dom';
import SmallLoader from '../Loaders/SmallLoader/SmallLoader';
import menuContext from '../../../context/menuContext/menuContext';

const Menu = React.lazy(() => import('../Menu/Menu'));
const Search = React.lazy(() => import('../search/Search'));

const Navbar = (props) => {
  const [search, setSearch] = useState(false);
  const [searchIcon, setSearchIcon] = useState('fas fa-search-plus');
  const { menuIsClosed, menuIcon, openMenu, closeMenu } = useContext(
    menuContext
  );

  const handleMenu = () => {
    if (menuIsClosed) {
      openMenu();
    } else {
      closeMenu();
    }

    setSearchIcon('fas fa-search-plus');
    setSearch(false);
  };

  const handleSearch = () => {
    setSearch((prev) => {
      if (!prev) {
        setSearchIcon('fas fa-search-minus');
      } else {
        setSearchIcon('fas fa-search-plus');
      }

      return !prev;
    });

    closeMenu();
  };

  return (
    <Fragment>
      <div className={classes.NavbarContainer}>
        <div className={classes.activeArea}>
          <div className={classes.social}>
            <a href='https://www.facebook.com' target='_blank'>
              <Icon
                iconClass='fab fa-facebook-square mg-lr-10 icon icon-md'
                title='KKTC Araç Bul Facebook Sayfası'
              />
            </a>
            <a href='https://www.instagram.com' target='_blank'>
              <Icon
                iconClass='fab fa-instagram-square mg-lr-10 icon icon-md'
                title='KKTC Araç Bul Instagram Sayfası'
              />
            </a>
            <a href='https://www.youtube.com' target='_blank'>
              <Icon
                iconClass='fab fa-youtube-square mg-lr-10 icon icon-md'
                title='KKTC Araç Bul Youtube Kanalı'
              />
            </a>
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
        <Suspense fallback={<SmallLoader />}>
          <Search active={search} />
        </Suspense>
        <Suspense fallback={<SmallLoader />}>
          <Menu />
        </Suspense>
      </div>
    </Fragment>
  );
};

export default Navbar;
