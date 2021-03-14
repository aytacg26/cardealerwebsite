import { useLayoutEffect, useState } from 'react';

const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateScreenSize);

    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

export default useMediaQuery;
