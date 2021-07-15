import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import Dropdown from './Dropdown';
import NavLinks from './NavLinks';
import useHeader from './useHeader';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
  li {
    list-style-type: none;
    margin: 0 5px;
    position: relative;
    counter-increment: item 1;
    color: var(--text-color);
  }
`;

const Logo42 = styled.img`
  width: 3em;
  margin-right: 1em;
`;

export const StyledFullName = styled.div`
  color: var(--text-color);
`;

const LogoWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
`;

const Header = (): JSX.Element => {
  const { isSm, isXs } = useHeader();

  return (
    <StyledHeader>
      <LogoWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Logo42 src="/42.png" />
        <>{!isSm && !isXs && <StyledFullName>Young Tran</StyledFullName>}</>
      </LogoWrapper>
      {(isSm || isXs) && <Dropdown />}

      {!isSm && !isXs && <NavLinks />}
    </StyledHeader>
  );
};

export default Header;
