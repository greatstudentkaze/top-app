import { useEffect, useState } from 'react';

const useVerticalScroll = (): number => {
  const isBrowser = typeof window !== 'undefined';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = isBrowser ? window.scrollY : 0;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBrowser]);

  return scrollY;
};

export default useVerticalScroll;
