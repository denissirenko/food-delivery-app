import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routes from '../../routes/Routers';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
