import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint: number) => {
  const [width, setWidth] = useState(globalThis?.window?.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [width]);

  if (width < breakpoint) {
    return true;
  }
};
