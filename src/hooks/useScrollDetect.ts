import { useEffect } from 'react';

const useScrollDetect = (handleScroll: () => void): void => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollDetect;
