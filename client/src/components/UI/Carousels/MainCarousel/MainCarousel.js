import Flickity from 'react-flickity-component';

const flickityOptions = {
  initialIndex: 2,
};

const Carousel = (props) => {
  console.log('It it working');
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={props.options} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {props.children}
    </Flickity>
  );
};

export default Carousel;
