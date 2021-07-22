import styled from '@emotion/styled';
import React from 'react';
import {
  appleList,
  fortyTwoList,
  infiswiftList,
  proterraList,
  selfTaughtList,
} from './Experiences';
import Section from './Section';

const ExperienceWrapper = styled.div`
  color: var(--text-color);
  padding-top: 6em;
  min-height: calc(100vh);
`;

const Experience = (): JSX.Element => {
  return (
    <ExperienceWrapper className="space-y-10" id="experience">
      <h1 className="text-2xl">Journey</h1>
      <Section
        title="2017 - 2018"
        subtitle="Self Study"
        list={selfTaughtList}
      />
      <Section
        direction="end"
        title="2018 - 2019"
        subtitle="42 SV Student"
        list={fortyTwoList}
      />
      <Section
        title="2019 - 2020"
        subtitle="Software Engineer at Infiswift Technologies"
        list={infiswiftList}
      />
      <Section
        direction="end"
        title="2020 - 2021"
        subtitle="Software Engineer at Proterra"
        list={proterraList}
      />
      <Section
        title="2021"
        subtitle="Software Engineer at Apple"
        list={appleList}
      />
    </ExperienceWrapper>
  );
};

export default Experience;
