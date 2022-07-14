import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint: number) => {

  const [isMatch, setIsMatch] = useState(globalThis?.window?.innerWidth < breakpoint);

  useEffect(() => {
    const match = window.matchMedia(`(max-width: ${breakpoint}px)`);

    function onChange() {
      setIsMatch(match.matches);
    }

    match.addEventListener('change', onChange);
    return () => match.removeEventListener('change', onChange);
  }, [breakpoint]);

  return isMatch;
};
