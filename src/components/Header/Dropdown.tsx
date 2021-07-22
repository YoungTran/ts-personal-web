import styled from '@emotion/styled';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useRef } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onBodyClick = () => {
      setShow(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <StyledContainer ref={ref}>
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
            <StyledListItem>
              <a href="#experience"> Experience</a>
            </StyledListItem>
            <StyledListItem>
              <a href="#projects"> Projects</a>
            </StyledListItem>
            <StyledListItem>
              <a href="#contact"> Contact</a>
            </StyledListItem>
          </ul>
        </div>
      </CSSTransition>
    </StyledContainer>
  );
};

export default Dropdown;
