import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Contact from 'sections/contact';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Vinícius Vaz | Portfolio" />
          <Contact />
        </Layout>
    </ThemeProvider>
  );
}