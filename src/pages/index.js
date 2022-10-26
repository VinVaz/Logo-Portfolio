import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import WorkSection from '../sections/work-section';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Vinícius Vaz | Portfolio" />
          <Banner />
          <WorkSection />
        </Layout>
    </ThemeProvider>
  );
}
