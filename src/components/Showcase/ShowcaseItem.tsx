import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { RepoLanguages } from '../../api/github';
import useShowcaseItem from './useShowcaseItem';

const ShowcaseAnimate = styled(motion.div)`
  flex: 1 1 300px; /*  Stretching: */
  flex: 0 1 20em; /*  No stretching: */
  margin: 5px;
  @media (max-width: 768px) {
    flex: 0 1 100%; /*  No stretching: */
  }
`;
const ShowcaseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    h1 {
      color: var(--text-color);
    }
  }
  height: 20em;
  background-image: url('/github.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
`;

interface ShowcaseItemProps {
  fullName: string;
  description: string;
  htmlUrl: string;
  imgSrc: string | undefined;
  languages: RepoLanguages;
}

const ShowcaseItem = ({
  fullName,
  htmlUrl,
  languages,
}: ShowcaseItemProps): JSX.Element => {
  const { divRef, controls, name, handleOpenLink } = useShowcaseItem(
    fullName,
    htmlUrl
  );

  return (
    <ShowcaseAnimate
      onClick={handleOpenLink}
      ref={divRef}
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <ShowcaseCard className="bg-gray-900 sm:p-5 p-4 sm:space-y-3 transition transform hover:-translate-y-2 cursor-pointer shadow-xl">
        <h1 className="sm:text-xl text-gray-400">{name}</h1>
        {languages ? (
          <div className="sm:text-sm">{Object.keys(languages).join(', ')}</div>
        ) : null}
      </ShowcaseCard>
    </ShowcaseAnimate>
  );
};

export default ShowcaseItem;
