import useBreakpoints from '../../hooks/useBreakpoints';

interface UseHeaderReturnValues {
  isSm: boolean;
  isXs: boolean;
}

const useHeader = (): UseHeaderReturnValues => {
  const { isSm, isXs } = useBreakpoints();

  return {
    isSm,
    isXs,
  };
};

export default useHeader;
