import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <React.Fragment>
      <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      <main id="content" sx={{ variant: 'layout.main', my: '4rem' }}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
