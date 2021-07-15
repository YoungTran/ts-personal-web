import styled from '@emotion/styled';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { StyledFullName } from './Header';

export const StyledIconGroup = styled.div`
  display: flex;
  align-items: center;
  width: 8em;
  justify-content: space-between;
`;

export const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCaretIcon = styled(FontAwesomeIcon)`
  color: var(--text-color);
  cursor: pointer;
`;
const StyledContainer = styled.div`
  position: relative;
`;

const StyledListItem = styled.li`
  padding: 5px 0;
  color: var(--text-color);
`;
const Dropdown = (): JSX.Element => {
  const [show, setShow] = React.useState(false);

  return (
    <StyledContainer>
      <StyledIconGroup>
        <StyledFullName>Young Tran</StyledFullName>
        <StyledCaretIcon
          icon={faCaretSquareDown}
          onClick={() => setShow(!show)}
        />
      </StyledIconGroup>
      <CSSTransition
        in={show}
        timeout={400}
        classNames="list-transition"
        appear
        unmountOnExit
      >
        <div className="list-body">
          <ul className="list">
            <StyledListItem>Experience</StyledListItem>
            <StyledListItem>Projects</StyledListItem>
            <StyledListItem>Contact</StyledListItem>
          </ul>
        </div>
      </CSSTransition>
    </StyledContainer>
  );
};

export default Dropdown;
