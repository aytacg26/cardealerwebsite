import React, { useState, useEffect } from 'react';
import Container from '../../UI/Container/Container';
import ImageCarousel from '../../UI/Carousels/ImageCarousel';
import PresentationWindow from '../../UI/PresentationWindow/PresentationWindow';
import MainCarousel from '../../UI/Carousels/MainCarousel/MainCarousel';
import classes from './home.module.css';

const Home = (props) => {
  const [vitrinIlanlari, setVitrinIlanlari] = useState([
    {
      id: '604ba2ffed22270015aff5be',
      marka: 'Mercedes',
      model: 'C180 Avagarde',
      yil: '2013',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Ali Veli',
      fiyat: '23000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: true,
      galeri: false,
      fiyatGoster: true,
      ilanTarih: '2021-03-14T12:12:28.923+00:00',
      resimler: [
        'https://i.ibb.co/rGkwMxv/Mercedes-Benz-W204-front-20080709.jpg',
        'https://i.ibb.co/8dPSTZB/mercedes-benz-c-class-c180-avantgarde-auto-2013-id-68492319-or.jpg',
        'https://i.ibb.co/bdmPmTG/mercedes-benz-c-class-c180-avantgarde-auto-2013-id-68929221-or.jpg',
        'https://i.ibb.co/ZJZCXTY/used-mercedes-benz-c-class-2558676-1.jpg',
      ],
    },

    {
      id: '604ba2ffed22270015aff5bf',
      marka: 'Mercedes',
      model: 'CLK200 Classic',
      yil: '2008',
      yakit: 'Benzin',
      vites: 'Manuel',
      satici: 'Dünya Oto Ltd',
      fiyat: '14000',
      paraBirimi: 'UK Pound',
      renk: 'Silver',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2021-03-10T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/Cs0ctf4/DSC00291.jpg',
        'https://i.ibb.co/dbHDS9r/Mercedes-CLK-4.jpg',
        'https://i.ibb.co/Yjh3337/mercedes-benz-clk-class-coupe-back-side-1-965023.jpg',
        'https://i.ibb.co/ydMbWBv/ZDE0-ZDc5-ZDJi-MTli-ZWI1-Nm-Iy-OTk2-Mzli-YWIy-OTYz-MDGXif-SKB-c-TFx93-EZvb-NQZa-HR0c-Dov-L3-Mz-LWV1.jpg',
      ],
    },
    {
      id: '604ba2ffed22270015alf6ce',
      marka: 'Nissan',
      model: '350z Fairlady Coupe',
      yil: '2007',
      yakit: 'Benzin',
      vites: 'Otomatik',
      satici: 'Osmanlızade',
      fiyat: '14000',
      paraBirimi: 'UK Pound',
      renk: 'Siyah',
      sahibinden: false,
      galeri: true,
      fiyatGoster: true,
      ilanTarih: '2021-01-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/s1wZBMF/10375094-2008-nissan-350z-std.jpg',
        'https://i.ibb.co/wyStfZB/1004752162.jpg',
        'https://i.ibb.co/3N0HRhm/maxresdefault.jpg',
        'https://i.ibb.co/vkWfh11/Z33.jpg',
      ],
    },

    {
      id: '604ba2ffed22260025agg5bt',
      marka: 'Porsche',
      model: '911 Turbo',
      yil: '2018',
      yakit: 'Benzin',
      vites: 'Otomatik',
      satici: 'Kings Oto Ltd',
      fiyat: '45000',
      paraBirimi: 'Euro',
      renk: 'Siyah',
      sahibinden: false,
      galeri: true,
      fiyatGoster: true,
      ilanTarih: '2021-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/BwhYXQp/DSC-7091-960x0-0-5x0.jpg',
        'https://i.ibb.co/vXPmTbH/Used-2018-Porsche-911-Carrera-4-GTS.jpg',
        'https://i.ibb.co/3cKc6Xm/Used-2018-Porsche-911-Turbo-S.jpg',
      ],
    },

    {
      id: '684bw2frrd34280211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2019-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/Yt5GbNx/01merccls-cls.jpg',
        'https://i.ibb.co/WD1cn6P/2019-Mercedes-CLS-white.jpg',
        'https://i.ibb.co/n3WcJh6/317703-2018-Mercedes-Benz-CLS-Class.jpg',
        'https://i.ibb.co/YdDqW55/cls-57.jpg',
        'https://i.ibb.co/D85MxqB/cp4i2094-jpg-1511982203.jpg',
      ],
    },
    {
      id: '618ba2pted34280211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2019-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/Yt5GbNx/01merccls-cls.jpg',
        'https://i.ibb.co/WD1cn6P/2019-Mercedes-CLS-white.jpg',
        'https://i.ibb.co/n3WcJh6/317703-2018-Mercedes-Benz-CLS-Class.jpg',
        'https://i.ibb.co/YdDqW55/cls-57.jpg',
        'https://i.ibb.co/D85MxqB/cp4i2094-jpg-1511982203.jpg',
      ],
    },
    {
      id: '616ba2foed34280211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2019-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/7njLq5B/21-214443-jaguar-car-wallpaper-for-mobile-jaguar-car-wallpapers.jpg',
        'https://i.ibb.co/ccs11Xs/SGT-190-mercedes-benz-yellow.jpg',
        'https://i.ibb.co/YjnQcCQ/Super-Car-Wallpapers-for-Mobile-Free-Download-Best-Wallpapers-24.jpg',
        'https://i.ibb.co/YdDqW55/cls-57.jpg',
        'https://i.ibb.co/D85MxqB/cp4i2094-jpg-1511982203.jpg',
      ],
    },
    {
      id: '604ba2fffg12680211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2019-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/Yt5GbNx/01merccls-cls.jpg',
        'https://i.ibb.co/WD1cn6P/2019-Mercedes-CLS-white.jpg',
        'https://i.ibb.co/n3WcJh6/317703-2018-Mercedes-Benz-CLS-Class.jpg',
        'https://i.ibb.co/YdDqW55/cls-57.jpg',
        'https://i.ibb.co/D85MxqB/cp4i2094-jpg-1511982203.jpg',
      ],
    },
    {
      id: '604ba2uied95280211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2019-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/Yt5GbNx/01merccls-cls.jpg',
        'https://i.ibb.co/WD1cn6P/2019-Mercedes-CLS-white.jpg',
        'https://i.ibb.co/n3WcJh6/317703-2018-Mercedes-Benz-CLS-Class.jpg',
        'https://i.ibb.co/YdDqW55/cls-57.jpg',
        'https://i.ibb.co/D85MxqB/cp4i2094-jpg-1511982203.jpg',
      ],
    },
    {
      id: '600ba2jled34280211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2019-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/Yt5GbNx/01merccls-cls.jpg',
        'https://i.ibb.co/WD1cn6P/2019-Mercedes-CLS-white.jpg',
        'https://i.ibb.co/n3WcJh6/317703-2018-Mercedes-Benz-CLS-Class.jpg',
        'https://i.ibb.co/YdDqW55/cls-57.jpg',
        'https://i.ibb.co/D85MxqB/cp4i2094-jpg-1511982203.jpg',
      ],
    },
    {
      id: '665ba2eged34280211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2019-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/Yt5GbNx/01merccls-cls.jpg',
        'https://i.ibb.co/WD1cn6P/2019-Mercedes-CLS-white.jpg',
        'https://i.ibb.co/n3WcJh6/317703-2018-Mercedes-Benz-CLS-Class.jpg',
        'https://i.ibb.co/YdDqW55/cls-57.jpg',
        'https://i.ibb.co/D85MxqB/cp4i2094-jpg-1511982203.jpg',
      ],
    },
    {
      id: '694bawffed34280211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2019-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/Yt5GbNx/01merccls-cls.jpg',
        'https://i.ibb.co/WD1cn6P/2019-Mercedes-CLS-white.jpg',
        'https://i.ibb.co/n3WcJh6/317703-2018-Mercedes-Benz-CLS-Class.jpg',
        'https://i.ibb.co/YdDqW55/cls-57.jpg',
        'https://i.ibb.co/D85MxqB/cp4i2094-jpg-1511982203.jpg',
      ],
    },
    {
      id: '604ba2ff3134280211afh5bt',
      marka: 'Mercedes',
      model: 'CLS350 Elegant',
      yil: '2019',
      yakit: 'Dizel',
      vites: 'Otomatik',
      satici: 'Dünya Oto Ltd',
      fiyat: '55000',
      paraBirimi: 'UK Pound',
      renk: 'Beyaz',
      sahibinden: false,
      galeri: true,
      fiyatGoster: false,
      ilanTarih: '2019-03-13T17:18:28.923+00:00',
      resimler: [
        'https://i.ibb.co/Yt5GbNx/01merccls-cls.jpg',
        'https://i.ibb.co/WD1cn6P/2019-Mercedes-CLS-white.jpg',
        'https://i.ibb.co/n3WcJh6/317703-2018-Mercedes-Benz-CLS-Class.jpg',
        'https://i.ibb.co/YdDqW55/cls-57.jpg',
        'https://i.ibb.co/D85MxqB/cp4i2094-jpg-1511982203.jpg',
      ],
    },
  ]);

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
          content={[]}
        />
        <PresentationWindow
          title='Galeriler'
          iconClass='fas fa-user-tie'
          content={[]}
        />
        <PresentationWindow
          title='Markalar'
          iconClass='far fa-copyright'
          content={[]}
        />
      </div>
    </Container>
  );
};

export default Home;
