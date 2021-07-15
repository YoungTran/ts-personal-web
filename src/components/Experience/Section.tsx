import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

const StyledSection = styled(motion.div)<{ direction: string | undefined }>`
  display: flex;
  height: 12em;
  justify-content: ${(props) => (props.direction === 'end' ? 'flex-end' : '')};
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface SectionProps {
  title: string;
  subtitle: string;
  list: JSX.Element;
  direction?: string;
}

const Section = ({
  title,
  subtitle,
  list,
  direction,
}: SectionProps): JSX.Element => {
  const divRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(divRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        controls.start('visible');
      }, 300);
    }
  }, [isVisible]);

  return (
    <StyledSection
      direction={direction}
      ref={divRef}
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <StyledContent className="bg-gray-900  sm:w-1/2 flex-col w-full justify-between p-4 text-center rounded-md shadow-2xl">
        <div>
          <h1 className="text-2xl">{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div>{list}</div>
      </StyledContent>
    </StyledSection>
  );
};

export default Section;
