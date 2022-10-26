/** @jsx jsx */
import { jsx, Container, Flex, Button, Link } from 'theme-ui';
import { keyframes } from '@emotion/core';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link href={menuItem.path} key={i} sx={styles.links} >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
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
