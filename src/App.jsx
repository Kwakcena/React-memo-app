import React from 'react';

import Header from './components/Header';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <Header />
      <Layout.Main>Hello</Layout.Main>
    </Layout>
  );
}
