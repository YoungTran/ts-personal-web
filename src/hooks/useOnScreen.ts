import { useEffect, useState } from 'react';

const useOnScreen = (
  ref: React.RefObject<HTMLDivElement | HTMLAnchorElement>
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return isIntersecting;
};

export default useOnScreen;
