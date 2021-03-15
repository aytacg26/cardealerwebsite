import { useLayoutEffect, useState } from 'react';
import { isMobile } from '../utils/isMobile';

const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    mobile: false,
  });

  useLayoutEffect(() => {
    const updateScreenSize = () => {
      const checkMobile = isMobile();
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        mobile: checkMobile,
      });
    };

    window.addEventListener('resize', updateScreenSize);

    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

export default useMediaQuery;
