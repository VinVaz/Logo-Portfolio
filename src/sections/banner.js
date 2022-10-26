import { jsx } from 'theme-ui';
import { Container, Heading, Text, Image, Button } from 'theme-ui';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Heading as="h1" variant="HeroPrimary">
          Logos
        </Heading>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['125px', '127px', '130px', '133px', null, null, '135px', '150px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
    },
    container: {
      width: '100%',
      mx: 'auto',
      pb: '27px',
      textAlign: 'center',
      borderBottom: '12px solid',
      borderColor: '#efeff2',
      mb: ['20px', null, null, null, null, 4],
    },
  },
};
