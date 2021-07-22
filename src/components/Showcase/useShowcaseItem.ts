import { AnimationControls, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

interface UseShowcaseItem {
  divRef: React.RefObject<HTMLDivElement>;
  controls: AnimationControls;
  name: string[];
  handleOpenLink: () => void;
}

const useShowcaseItem = (
  fullName: string,
  htmlUrl: string
): UseShowcaseItem => {
  const divRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(divRef);
  const controls = useAnimation();
  const name = fullName
    .split('-')
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1) + ' ');
  const handleOpenLink = () => {
    const win = window.open(htmlUrl, '_blank');
    win?.focus();
  };
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
    handleOpenLink,
  };
};

export default useShowcaseItem;
