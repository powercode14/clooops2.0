import PropTypes from 'prop-types';
import { RequireAuth } from 'auth';
import { Outlet } from 'react-router-dom';
import Top from './Top';
import Menu from './Menu';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <RequireAuth>
      <div className="bg-main">
        <div id="wrapper">
          <Top />
          <Menu />
          <div id="container">
            <div id="contents">
              <div className="page-inner">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </RequireAuth>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
