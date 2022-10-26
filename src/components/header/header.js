import { Container, Flex, Button, Link } from 'theme-ui';
import Logo from 'components/logo';
import LogoDark from '../../../public/assets/logo.svg';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link href={menuItem.path} key={i} sx={styles.links}>
              {menuItem.label}
            </Link>
          ))}
        </Flex>
      </Container>
    </header>
  );
}

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 6,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  links: {
    color: 'text',
    fontSize: 6,
    textDecoration: 'none',
  },
  nav: {
    mr: [15, 20, null, null, 0],
    ml: ['auto', null, null, null, 0],
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 4,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
