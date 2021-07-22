import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Dropdown from './Dropdown';
import NavLinks from './NavLinks';
import useHeader from './useHeader';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 70vw;
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
  cursor: pointer;
`;

const HeaderContainer = styled.div<{ fixed: boolean }>`
  background: ${(props) => (props.fixed ? 'rgba(0, 0, 0, 0.4)' : '')};
  padding: 1em clamp(2em, 14%, 13.5em);

  @media (max-width: 768px) {
    padding: 1rem 3rem;
  }
`;

const Header = (): JSX.Element => {
  const { isSm, isXs, fixed, divRef } = useHeader();
  const history = useHistory();
  return (
    <HeaderContainer
      ref={divRef}
      fixed={fixed}
      className={`${
        fixed ? 'fixed z-50 bg-transparent shadow-2xl blur w-full' : ''
      } transition top-1 ease-in-out duration-500 `}
    >
      <StyledHeader>
        <LogoWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => {
            window.scrollTo(0, 0);
            history.replace('/');
          }}
        >
          <Logo42 src="/42.png" />
          <>{!isSm && !isXs && <StyledFullName>Young Tran</StyledFullName>}</>
        </LogoWrapper>
        {(isSm || isXs) && <Dropdown />}

        {!isSm && !isXs && <NavLinks />}
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
