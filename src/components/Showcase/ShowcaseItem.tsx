import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import useShowcaseItem from './useShowcaseItem';

const ShowcaseCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ShowcaseCardContainer = styled.div`
  &:hover {
    h1 {
      color: var(--text-color);
    }
  }
  height: 20em;
  flex: 1 1 300px; /*  Stretching: */
  flex: 0 1 20em; /*  No stretching: */
  margin: 5px;
  background-image: url('/github.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  @media (max-width: 768px) {
    flex: 0 1 100%; /*  No stretching: */
  }
`;

interface ShowcaseItemProps {
  fullName: string;
  description: string;
  htmlUrl: string;
  imgSrc: string | undefined;
}

const ShowcaseItem = ({
  fullName,
  htmlUrl,
}: ShowcaseItemProps): JSX.Element => {
  const { divRef, controls, name } = useShowcaseItem(fullName);

  return (
    <ShowcaseCardContainer className="bg-gray-900 sm:p-5 p-4 sm:space-y-3 transition transform hover:-translate-y-2 cursor-pointer shadow-xl">
      <ShowcaseCard
        href={htmlUrl}
        ref={divRef}
        animate={controls}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <h1 className="sm:text-xl text-gray-400">{name}</h1>
      </ShowcaseCard>
    </ShowcaseCardContainer>
  );
};

export default ShowcaseItem;
