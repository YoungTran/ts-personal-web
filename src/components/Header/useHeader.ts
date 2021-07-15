import React from 'react';
import { useLocation } from 'react-router-dom';
import useBreakpoints from '../../hooks/useBreakpoints';

interface UseHeaderReturnValues {
  fadeClass: string;
  timeout: number;
  isSm: boolean;
  isXs: boolean;
  showDropdown: boolean;
  isMounted: boolean;
  fadeDownClass: string;
  isHome: boolean;
}

const useHeader = (): UseHeaderReturnValues => {
  const location = useLocation();
  const isHome = location.pathname === '/home';
  const [isMounted, setIsMounted] = React.useState(false);
  const { isSm, isXs, active } = useBreakpoints();
  const timeout = 2000;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const showDropdown = active === 'xs' || active === 'sm';

  return {
    fadeClass,
    timeout,
    isSm,
    isXs,
    showDropdown,
    isMounted,
    fadeDownClass,
    isHome,
  };
};

export default useHeader;
