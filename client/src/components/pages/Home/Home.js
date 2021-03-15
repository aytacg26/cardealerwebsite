import React, { useState, useEffect, useMemo } from 'react';
import Container from '../../UI/Container/Container';
import BrandLogoCard from '../../UI/Cards/BrandLogoCard/BrandLogoCard';

import PresentationWindow from '../../UI/PresentationWindow/PresentationWindow';
import ImageCarousel from '../../UI/Carousels/ImageCarousel/ImageCarousel';
import ProductCarousel from '../../UI/Carousels/ProductCarousel/ProductCarousel';
import classes from './home.module.css';

const Home = (props) => {
  //data will come from database
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
  //data will come from database
  const [brands, setBrands] = useState([
    {
      id: 'ac-032001009-uk',
      company: 'Auto Carriers Ltd',
      brand: 'AC',
      logo: 'https://i.ibb.co/nBvJy6P/AC.png',
    },
    {
      id: 'alfa-0332002008-it',
      company: 'Alfa Romeo Automobiles S.p.A.',
      brand: 'Alfa Romeo',
      logo: 'https://i.ibb.co/4F9Zdjt/Alfa-Romeo.png',
    },
    {
      id: 'aston-0332003007-uk',
      company: 'Aston Martin Lagonda Global Holdings plc',
      brand: 'Aston Martin',
      logo: 'https://i.ibb.co/TqWfRb4/Aston-Martin.png',
    },
    {
      id: 'audi-0332004006-ge',
      company: 'Volkswagen Group',
      brand: 'Audi',
      logo: 'https://i.ibb.co/6XgZBJv/Audi.png',
    },
    {
      id: 'bentley-0332005005-uk',
      company: 'Bentley Motors Limited',
      brand: 'Bentley',
      logo: 'https://i.ibb.co/mqWmtg9/Bentley.png',
    },
    {
      id: 'bmw-0332006004-ge',
      company: 'Bayerische Motoren Werke AG',
      brand: 'BMW',
      logo: 'https://i.ibb.co/61mdV5r/BMW.png',
    },
    {
      id: 'chev-0332007003-usa',
      company: 'General Motors',
      brand: 'Chevrolet',
      logo: 'https://i.ibb.co/V93sdm7/Chervolet.png',
    },
    {
      id: 'cito-00332008002-fr',
      company: 'Citroen',
      brand: 'Citroen',
      logo: 'https://i.ibb.co/SrYdVdS/Citroen.png',
    },
    {
      id: 'daih-00332009001-jp',
      company: 'Daihatsu Motor Co., Ltd',
      brand: 'Daihatsu',
      logo: 'https://i.ibb.co/8s0DfpP/Daihatsu.png',
    },
    {
      id: 'dat-00332010010-jp',
      company: 'The Nissan Motor Company, Ltd.',
      brand: 'Datsun',
      logo: 'https://i.ibb.co/QrHYNpZ/Datsun.png',
    },
    {
      id: 'fer-00332011011-it',
      company: 'Ferrari S.p.A.',
      brand: 'Ferrari',
      logo: 'https://i.ibb.co/9HZ4WKj/Ferrari.png',
    },
    {
      id: 'fia-00332012012-it',
      company: 'Fiat Automobiles S.p.A.',
      brand: 'Fiat',
      logo: 'https://i.ibb.co/DrBNVvY/Fiat.png',
    },
    {
      id: 'frd-00332013012-usa',
      company: 'Ford Motor Company',
      brand: 'Ford',
      logo: 'https://i.ibb.co/dW9WWtQ/Ford.png',
    },
    {
      id: 'hon-00332014014-jp',
      company: 'Honda Motor Company, Ltd.',
      brand: 'Honda',
      logo: 'https://i.ibb.co/tKGq9f0/Honda.png',
    },
    {
      id: 'hyu-00332015015-sk',
      company: 'Hyundai Motor Company',
      brand: 'Hyundai',
      logo: 'https://i.ibb.co/26Yqpxc/Hyundai.png',
    },
    {
      id: 'jgr-00332016016-uk',
      company: 'Tata Motors',
      brand: 'Jaguar',
      logo: 'https://i.ibb.co/BLvqvjG/Jaguar.png',
    },
    {
      id: 'lam-00332017017-it',
      company: 'Volkswagen Group',
      brand: 'Lamborghini',
      logo: 'https://i.ibb.co/GM83pp6/Lamborghini.png',
    },
    {
      id: 'lro-01332018020-uk',
      company: 'Tata Motors',
      brand: 'Land Rover',
      logo: 'https://i.ibb.co/LY6NqQ2/Land-Rover.png',
    },
    {
      id: 'lxs-02332019021-jp',
      company: 'Toyota Motor Corporation',
      brand: 'Lexus',
      logo: 'https://i.ibb.co/GPbJHwy/Lexus.png',
    },
    {
      id: 'lts-0233202022-uk',
      company: 'Lotus Cars Limited',
      brand: 'Lotus',
      logo: 'https://i.ibb.co/PYcTKHs/Lotus.png',
    },
    {
      id: 'mst-0233202123-it',
      company: 'Maserati S.p.A.',
      brand: 'Maserati',
      logo: 'https://i.ibb.co/YBtrdRf/Maserati.png',
    },
    {
      id: 'mzd-0233202224-jp',
      company: 'Mazda Motor Corporation',
      brand: 'Mazda',
      logo: 'https://i.ibb.co/Db090Dg/Mazda.png',
    },
    {
      id: 'mcl-0233202325-uk',
      company: 'McLaren Racing Limited',
      brand: 'McLaren',
      logo: 'https://i.ibb.co/9VCT48V/Mclaren.png',
    },
    {
      id: 'mrc-0233202426-ge',
      company: 'Daimler AG',
      brand: 'Mercedes-Benz',
      logo: 'https://i.ibb.co/txDpr3C/Mercedes.png',
    },
    {
      id: 'mg-031233123-uk',
      company: 'SAIC Motor Corporation Limited',
      brand: 'MG',
      logo: 'https://i.ibb.co/sw2KxMd/MGLogo.png',
    },
    {
      id: 'mn-0987123441-uk',
      company: 'Bayerische Motoren Werke AG (BMW)',
      brand: 'Mini',
      logo: 'https://i.ibb.co/yN5zB3v/Mini.png',
    },
    {
      id: 'mts-56712129902-jp',
      company: 'Mitsubishi Motors Corporation',
      brand: 'Mitsubishi',
      logo: 'https://i.ibb.co/YjZ9PK8/Mitsubishi.png',
    },
    {
      id: 'nis-350370400z-jp',
      company: 'Nissan Motor Company, Ltd.',
      brand: 'Nissan',
      logo: 'https://i.ibb.co/CbR6Qkp/Nissan.png',
    },
    {
      id: 'opl-789123009-ge',
      company: 'Opel Automobile GmbH',
      brand: 'Opel',
      logo: 'https://i.ibb.co/HTBcLN8/Opel.png',
    },
    {
      id: 'pea-206207306-fr',
      company: 'Stellantis N.V.',
      brand: 'Peugeot',
      logo: 'https://i.ibb.co/Yb7TD5g/Peaguet.png',
    },
    {
      id: 'por-911928bxtr-ge',
      company: 'Volkswagen Group',
      brand: 'Porsche',
      logo: 'https://i.ibb.co/7vtwXCr/Porsche.png',
    },
    {
      id: 'ren-11091921tx-fr',
      company: 'Groupe Renault',
      brand: 'Renault',
      logo: 'https://i.ibb.co/gJFVFMT/Renault.png',
    },
    {
      id: 'rolls-890987113-uk',
      company: 'Rolls-Royce Motor Cars Limited',
      brand: 'Rolls-Royce',
      logo: 'https://i.ibb.co/HpFsKSZ/Rolls-Royce.png',
    },
    {
      id: 'seat-1453107109-ge',
      company: 'Volkswagen Group',
      brand: 'Seat',
      logo: 'https://i.ibb.co/YyQTzJg/Seat.png',
    },
    {
      id: 'sub-69100345991-jp',
      company: 'Subaru Corporation',
      brand: 'Subaru',
      logo: 'https://i.ibb.co/8bMCKtm/Subaru.png',
    },
    {
      id: 'szk-000288812981-jp',
      company: 'Suzuki Motor Corporation',
      brand: 'Suzuki',
      logo: 'https://i.ibb.co/dQzKMfw/Suzuki.png',
    },
    {
      id: 'tyta-900012579330-jp',
      company: 'Toyota Motor Corporation',
      brand: 'Toyota',
      logo: 'https://i.ibb.co/KDNvfPm/Toyota.png',
    },
    {
      id: 'vaux-333999745-uk',
      company: 'Vauxhall Motors Limited - Opel',
      brand: 'Vauxhall',
      logo: 'https://i.ibb.co/mcJSsFL/Vauxhall.png',
    },
    {
      id: 'vw-002980907015-ge',
      company: 'Volkswagen Group',
      brand: 'Volkswagen',
      logo: 'https://i.ibb.co/MCYckZm/Volkswagen.png',
    },
    {
      id: 'vol-97813320891-sw',
      company: 'Geely Auto Group',
      brand: 'Volvo',
      logo: 'https://i.ibb.co/P9z9gcL/Volvo.png',
    },
  ]);

  const listBrands = () => {
    return brands.map((item) => (
      <BrandLogoCard
        id={item.id}
        brand={item.brand}
        company={item.company}
        image={item.logo}
        key={item.id}
      />
    ));
  };

  const vitrinCarouselOptions = {
    autoPlay: true,
    autoPlayInterval: 7000,
    disableDotsControls: true,
    disableButtonsControls: false,
    autoPlayControls: true,
  };

  return (
    <Container>
      <ImageCarousel />
      <div className={classes.HomeMain}>
        <PresentationWindow
          title='Vitrin İlanları'
          iconClass='fas fa-store'
          linkToPage='/vitrin'
        >
          <ProductCarousel
            content={vitrinIlanlari}
            carouselOptions={vitrinCarouselOptions}
          />
        </PresentationWindow>
        <PresentationWindow
          title='En Son Eklenenler'
          iconClass='fas fa-plus-square'
          linkToPage='/ensoneklenenler'
        >
          <ProductCarousel
            content={vitrinIlanlari}
            carouselOptions={vitrinCarouselOptions}
          />
        </PresentationWindow>
        <PresentationWindow
          title='Galeriler'
          iconClass='fas fa-user-tie'
          linkToPage='/galeriler'
        >
          GALERİLER BURADA YER ALACAK
        </PresentationWindow>

        <PresentationWindow
          title='Markalar'
          iconClass='far fa-copyright'
          linkToPage='/markalar'
          contentAreaClass='StandardWindow'
        >
          {useMemo(listBrands, [brands])}
        </PresentationWindow>
      </div>
      <div>Footer</div>
    </Container>
  );
};

export default Home;
