/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Text, Heading, Image, Flex, Box, Link } from 'theme-ui';

export default function WorkCard({ src, altText, title }) {
  return (
    <Flex sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.memberThumb} />
      <Box sx={styles.infoWrapper}>
        <Heading className="info__name" sx={styles.infoWrapper.name}>
          {title}
        </Heading>
      </Box>
    </Flex>
  );
}

const styles = {
  card: {
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: '32px 8px 8px 8px',
    my: '16px',
    mx: '32px',
    transition: 'ease-in-out 0.3s',
    borderRadius: '8px',
    position: 'relative',
    boxShadow: ['none', null, '0 2px 10px rgba(39, 83, 123, 0.12)'],
    '&:hover': {
      boxShadow: ['none', null, '0 10px 12px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'primary',
      },
    },
  },

  memberThumb: {
    maxWidth: '280px',
    flexShrink: 0,
    borderRadius: '3px',
    mb: [3, null, 4],
  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mb: 0,
    mt: 4,
    name: {
      fontSize: [3, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
    },
  },
};
