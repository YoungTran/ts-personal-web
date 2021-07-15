import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import { GithubRepo } from '../../api/github';
import ShowcaseItem from './ShowcaseItem';

const ShowcaseListWrapper = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ShowcaseWrapper = styled.div`
  color: var(--text-color);
  min-height: calc(100vh);
  padding-top: 6em;
  div.parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ShowcaseList = ({
  repos,
}: {
  repos: GithubRepo[] | undefined;
}): JSX.Element => {
  return (
    <ShowcaseWrapper className="space-y-10">
      <h1 className="text-2xl">Project Showcase</h1>
      <ShowcaseListWrapper>
        {repos &&
          repos.map(({ name, description, html_url, img_src }, i) => {
            if (i < 6) {
              return (
                <ShowcaseItem
                  fullName={name}
                  description={description}
                  htmlUrl={html_url}
                  imgSrc={img_src}
                  key={name}
                />
              );
            }
          })}
      </ShowcaseListWrapper>
    </ShowcaseWrapper>
  );
};

export default ShowcaseList;
