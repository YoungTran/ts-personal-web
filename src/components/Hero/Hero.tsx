import styled from '@emotion/styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const StyledHero = styled(motion.div)`
  padding-top: 6em;
  @media (max-width: 768px) {
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
  }
`;

const StyledImage = styled.img`
  max-width: 300px;
  @media (max-width: 768px) {
    max-width: 200px;
    width: 100%;
    z-index: 0;
  }
`;

const Hero = (): JSX.Element => {
  return (
    <StyledHero
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="sm:space-y-10 space-y-8">
        <h1 className="text-3xl text-white">Hi there, my name is Young</h1>
        <p className="text-white max-w-md">
          I'm a Software Engineer residing in the Bay Area.
          <br /> I'm currently working on user experience driven interfaces and
          CI/CD pipelines at <FontAwesomeIcon icon={faAppleAlt} /> as a Software
          Engineer.
        </p>

        <StyledImage
          src="/young.png"
          alt=""
          className="filter grayscale rounded-lg"
        />
      </div>
    </StyledHero>
  );
};

export default Hero;
