import { useEffect, useRef, useState } from 'react';
import useBreakpoints from '../../hooks/useBreakpoints';
import useOnScreen from '../../hooks/useOnScreen';

interface UseHeaderReturnValues {
  isSm: boolean;
  isXs: boolean;
  fixed: boolean;
  divRef: React.RefObject<HTMLDivElement>;
}

const useHeader = (): UseHeaderReturnValues => {
  const { isSm, isXs } = useBreakpoints();
  const [fixed, setFixed] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(divRef);
  const [currentScroll, setCurrentScroll] = useState(0);
  const handleScroll = () => {
    setCurrentScroll(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll, false);
  }, []);

  useEffect(() => {
    if (isVisible && currentScroll === 0) {
      setFixed(false);
    }
    if (!isVisible) {
      setFixed(true);
    }
  }, [isVisible, currentScroll]);

  return {
    isSm,
    isXs,
    fixed,
    divRef,
  };
};

export default useHeader;
