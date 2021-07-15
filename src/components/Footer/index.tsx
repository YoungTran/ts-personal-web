import styled from '@emotion/styled';
import React from 'react';

const FooterContainer = styled.div`
  color: var(--text-color);
  ul {
    display: flex;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <h1 className="text-center py-3">Designed & Created by Young Tran</h1>
    </FooterContainer>
  );
};

export default Footer;
