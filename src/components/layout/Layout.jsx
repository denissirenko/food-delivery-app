import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routes from '../../routes/Routers';

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
