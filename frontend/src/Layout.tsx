import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TopBanner from './Home';

const Layout = () => {
  return (
    <>
      <Navbar />
      <TopBanner />
      <Outlet />
    </>
  );
};

export default Layout;
