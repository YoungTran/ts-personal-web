import { AnimationControls, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

interface UseShowcaseItem {
  divRef: React.RefObject<HTMLAnchorElement>;
  controls: AnimationControls;
  name: string[];
}

const useShowcaseItem = (fullName: string): UseShowcaseItem => {
  const divRef = useRef<HTMLAnchorElement>(null);
  const isVisible = useOnScreen(divRef);
  const controls = useAnimation();
  const name = fullName
    .split('-')
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1) + ' ');

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        controls.start('visible');
      }, 100);
    }
  }, [isVisible]);

  return {
    divRef,
    controls,
    name,
  };
};

export default useShowcaseItem;
