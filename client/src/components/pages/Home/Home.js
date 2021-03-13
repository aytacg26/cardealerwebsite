import React, { useState, useEffect } from 'react';
import Container from '../../UI/Container/Container';
import ImageCarousel from '../../UI/Carousels/ImageCarousel';
import PresentationWindow from '../../UI/PresentationWindow/PresentationWindow';
import classes from './home.module.css';

const Home = (props) => {
  const [vitrinIlanlari, setVitrinIlanlari] = useState([
    {
      marka: 'Mercedes',
      model: 'C180 Avagarde',
      yil: '2013',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
    },
    {
      marka: 'Mercedes',
      model: 'CLK200 Classic',
      yil: '2008',
      yakit: 'Benzin',
      vites: 'Manuel',
      satici: 'Dünya Oto Ltd',
    },
    {
      marka: 'Nissan',
      model: '350z Fairlady Coupe',
      yil: '207',
      yakit: 'Benzin',
      vites: 'Otomatik',
      satici: 'Osmanlızade',
    },
    {
      marka: 'Porsche',
      model: '911 Turbo',
      yil: '2018',
      yakit: 'Benzin',
      vites: 'Otomatik',
      satici: 'Kings Oto Ltd',
    },
    {
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
    },
  ]);
  const [carousel, setCarousel] = useState(null);

  return (
    <Container>
      <ImageCarousel isMobile={props._isMobile} />
      <div className={classes.HomeMain}>
        <PresentationWindow
          title='Vitrin İlanları'
          iconClass='fas fa-store'
          content={vitrinIlanlari}
        />
        <PresentationWindow
          title='En Son Eklenenler'
          iconClass='fas fa-plus-square'
        />
        <PresentationWindow title='Galeriler' iconClass='fas fa-user-tie' />
        <PresentationWindow title='Markalar' iconClass='far fa-copyright' />
      </div>
    </Container>
  );
};

export default Home;
