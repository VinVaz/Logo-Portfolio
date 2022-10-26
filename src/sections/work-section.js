import { jsx } from 'theme-ui';
import { Container, Flex, Heading } from 'theme-ui';
import WorkCard from 'components/work-card';
import data from 'data/assets.js';

export default function WorkSection() {
  return (
    <Container>
      <Flex sx={styles.flex}>
        {data.map((item) => (
          <WorkCard
            key={item.id}
            src={item.imgSrc}
            altText={item.altText}
            title={item.title}
          />
        ))}
      </Flex>
    </Container>
  );
}

const styles = {
  flex: {
    mt: [2, null, -6, null, -4],
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};
