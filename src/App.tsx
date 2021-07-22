import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Contact from './components/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer';
import FullScreenLoader from './components/FullScreenLoader/FullScreenLoader';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ShowcaseList from './components/Showcase';
import useApp from './hooks/useApp';

const StyledApp = styled.div`
  padding: 1rem clamp(2em, 14%, 13.5em);
  position: relative;
  height: 100%;
  @media (max-width: 768px) {
    padding: 1rem 3rem;
  }
`;

const Logo42 = styled(motion.img)<{ animClass: boolean }>`
  position: fixed;
  z-index: 999;
  padding-bottom: 2rem;
  right: 0;
  bottom: 0;
  transition: 500ms var(--easing);
  width: ${(props) => (props.animClass ? '5em' : '40%')};
  transform: ${(props) => (props.animClass ? 'translate(100, 100) ' : '')};
  @media (max-width: 768px) {
    width: ${(props) => (props.animClass ? '3em' : '8em')};
    padding-bottom: ${(props) => (props.animClass ? '3em' : '4em')};
  }
`;

const AppContainer = styled.div`
  background-color: var(--bg);
`;

const App = (): JSX.Element => {
  const { loading, animClass, repos, error } = useApp();
  const history = useHistory();

  return (
    <AppContainer className="bg-gradient-to-tr from-gray-900">
      <motion.div animate={{ opacity: loading ? 1 : 0 }}>
        <FullScreenLoader />
      </motion.div>
      {!loading && !error && <Header />}
      {!loading && !error && (
        <StyledApp>
          <Hero />
          <Logo42
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            src="/42.png"
            animClass={animClass}
            className="sm:mr-48 mr-14 cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              history.replace('/');
            }}
          />
          <Experience />
          <ShowcaseList repos={repos} />
          <Contact />
          <Footer />
        </StyledApp>
      )}
    </AppContainer>
  );
};

export default App;
