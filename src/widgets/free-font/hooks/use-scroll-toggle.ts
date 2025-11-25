import { useState, useEffect } from 'react';

export const useScrollToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const windowHeight = window.innerHeight;
      setIsVisible(scrollTop > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
};
