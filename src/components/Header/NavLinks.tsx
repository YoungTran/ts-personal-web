import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';

const StyledLinks = styled(motion.ul)`
  display: flex;
  justify-content: space-between;
  width: clamp(300px, 50vw, 400px);
  @media (max-width: 768px) {
    display: none;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const navLinks = [
  { url: '#experience', name: 'Experience' },
  { url: '/projects', name: 'Projects' },
  { url: '/contact', name: 'Contact' },
];

const NavLinks = (): JSX.Element => {
  return (
    <StyledLinks variants={container} initial="hidden" animate="show">
      {navLinks.map((item, i) => (
        <motion.li key={i} variants={listItem}>
          {item.name}
        </motion.li>
      ))}
    </StyledLinks>
  );
};

export default NavLinks;
